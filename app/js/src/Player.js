import { Playlist } from "./Playlist"

export class Player {

  playlist = null;
  controls = null;
  playingMusic = null;
  order = null;
  random = 0;
  repeat = 0;
  volume = null;
  time = 0;
  Audio = null;

  constructor() {
    this.playlist = new Playlist();
    this.Audio = new Audio();
    $(this.Audio).on('ended', () => this.next()); 
    this.controls = this.getControls();
  }

  /**
   * Adds events for controls and 
   * returns an object with DOM elements of the controller
   * @returns object
   */
  getControls() {

    let controls = {
      play: $("#play"),
      next: $("#next"),
      previous: $("#previous"),
      random: $("#random"),
      repeat: $("#repeat"),
      timeLine: $("#timeline"),
      progressLeft: $("#progress-left"),
      progressRight: $("#progress-right"),
      volume: $("#volume"),
      author: $("#author"),
      name: $("#name"),
      img: $("img"),
    };

    controls.play.click((e) => {
      e = $(e.target);
      if(e.data('action') == "play") this.play();
      else this.pause();
    });

    controls.next.click(() => {
      if (this.repeat != 1) {
        this.repeat = 1;
        this.next()
        this.repeat = 0;
      } else this.next();

    });

    controls.previous.click(() => this.previous());

    controls.timeLine.on("input", e => {
      this.pause();
      let max = e.target.max;
	    let prog = e.target.value / max * 100;
	    let span = e.target.nextSibling;
	    span.style.width = `${prog}%`;
    });

    controls.timeLine.on("change", e => {
      let time = e.target.value;
      this.play(null, time);
    });

    controls.volume.on("input", e => this.setVolume(e.target.value));

    controls.repeat.click(e => {
      e = $(e.target);
      switch (e.data('state')) {
        case 0:
          e.css('color', "#f23050");
          e.data('state', 1);
          break;
        case 1:
          e.find('span').css('display', "block");
          e.data('state', 2);
          break;
        case 2:
          e.find('span').css('display', "none");
          e.data('state', 0);
          e.css('color', "#fff");
          break;
      }

      this.repeat = e.data('state');

    });

    controls.random.click((e) => {
      e = $(e.target);
      switch (e.data('state')) {
        case 0:
          e.css('color', "#f23050");
          this.random = Array.from(this.getMusic().keys());
          this.random.sort(() => Math.random() - 0.5);
          e.data('state', 1);
          break;
        
        case 1:
          e.css('color', '#fff');
          this.random = null;
          e.data('state', 0);
          break;
      }
    });

    return controls;

  }

  /**
   * If an id is passed, it returns the music with that id, 
   * otherwise it returns this.musics.
   * @param {*} id muisc id
   * @returns this.musics or music with the transferred id
   */
  getMusic(id = null) {
    
    if (!id) return this.playlist.musics;
  
    return this.playlist.musics.get(id);

  }

  /**
   * Sets the music playback time
   * @param {*} time Time in seconds
   */
  setTime(time) {

    let duration = Math.floor(this.Audio.duration);

    this.controls.timeLine.siblings("span").css('width', `${time / duration * 100}%`);

    this.Audio.currentTime = time;

  }

  /**
   * Sets the value of this.musics
   * @param {Map} musics
   */
  setMusics(musics) {
    this.playlist.musics = musics;
  }

  /**
   * Sets the value of this.Audio and adds events
   * @param {string} url url of music 
   */
  setAudio(url) {

    this.Audio.pause();
    this.Audio.src = url;

    $(this.Audio).on('loadeddata', () => {
      let duration = Math.floor(this.Audio.duration);
      let progressRight = Math.floor(duration / 60)+':'+duration % 60;
      this.controls.progressRight.html(progressRight);
      let music = this.getMusic(this.playingMusic);
      this.controls.author.html(music.author);
      this.controls.name.html(music.name);
      this.controls.img.attr('src', music.img);
      this.controls.timeLine.attr('max', duration);
      this.controls.timeLine.siblings('span.progress').css('width', 0);
    });

    $(this.Audio).on('timeupdate', () => {
      let duration = Math.floor(this.Audio.duration);
      let time = Math.floor(this.Audio.currentTime);
      let progressLeft = Math.floor(time / 60) + ':' + time % 60;
      this.controls.progressLeft.html(progressLeft);
      this.controls.timeLine.siblings('span.progress').css('width', `${time * 100 / duration}%`);
    });

  }

  /**
   * Sets the volume
   * @param {int} volume 
   */
  setVolume(volume) {
    this.Audio.volume = volume / 100;
    this.controls.volume.siblings('span').css("width", volume+'%');
  }

  /**
   * Starts audio playback. If not passed 
   * musicId continues playing the current music,
   * otherwise it plays music with id equal to musicId. 
   * If time is passed starts playback from the specified time
   * @param {int} id music id
   * @param {int} time Time in seconds
   */
  play(id = null, time = null) {

    this.pause();

    if (id) {

      let music = this.getMusic(id);

      music.DomElement.find("button").html('<i data-action="pause" class="pause far fa-pause-circle"></i>');
      this.controls.play.html('<i data-action="pause" class="far fa-pause-circle"></i>');

      if (this.playingMusic == id && this.Audio) this.Audio.play();
      else {
        this.playingMusic = id;
        this.setAudio(music.src);
        this.Audio.play();
      }

    } else if (this.playingMusic && time) {
      this.setTime(time);
      this.play(this.playingMusic);
    } else if (this.playingMusic) this.play(this.playingMusic);

  }

  /**
   * Pauses playback
   */
  pause() {

    if (!this.playingMusic) return;
    
    this.controls.play.html('<i data-action="play" class="far fa-play-circle"></i>');
    let music = this.getMusic(this.playingMusic);
    music.DomElement.find('button').html('<i data-action="play" class="play far fa-play-circle"></i>');
    this.Audio.pause();

  }

  /**
   * Plays the next audio
   */
  next() {
    let musicIds = this.random ? this.random : Array.from(this.getMusic().keys());
    let lastMusic = musicIds[musicIds.length - 1];

    if (this.repeat == 2) this.play(this.playingMusic, 0);
    else if (this.playingMusic == lastMusic && this.repeat == 1) this.play(musicIds[0]); 
    else if (this.playingMusic != lastMusic) {
      let nextMusic = musicIds.indexOf(this.playingMusic);
      nextMusic++; 
      this.play(musicIds[nextMusic]);
    } else {
      this.setTime(0);
      this.pause();
    }
  }

  /**
   * Plays previous audio
   */
  previous() {
    let musicIds = this.random ? this.random : Array.from(this.getMusic().keys());
    let previousMusic = musicIds.indexOf(this.playingMusic);
    previousMusic--;
    if (previousMusic == -1) this.play(musicIds[musicIds.length - 1]);
    else this.play(musicIds[previousMusic]);
  }

}