import { Request } from "./Request";
import { App } from "./App";

export class Music {
  
  id = null; // music id
  name = null; // music name
  author = null; // music author
  genre = null; // music renre
  src = null; // Audio file path
  img = null; // Image path
  DomElement = null; // DOM element of music
  
  /**
   * Returns a Map from Music objects. 
   * If passed id, returns one instance of the Music class with the given id. 
   * Data is taken from the server via ajax not async.
   * @param {int} id 
   * @returns Map from Music objects or one instance of the Music class.
   */
  static getMusics(id) {
    
    if (!id) return false;

    let musics = new Map();

    let request = new Request();
    request.url = App.basePath + '/server/musics.php';
    request.type = "GET";
    request.dataType = "json";
    request.data = {id: id};
    request.async = false;
    request.success = data => {

      for (let i = 0; i < data.length; i++) {
        
        let music = new Music();

        music.id = data[i].id;
        music.name = data[i].name;
        music.author = data[i].author;
        music.genre = data[i].genre_id;
        music.src = data[i].src;
        music.img = data[i].img;

        music.DomElement = $('<div class="music-item"></div>');
        music.DomElement.append(`<img src="${App.basePath+'/'+music.img}" alt="error">`);
      
        let hover = $(`<div class="hover"></div>`);
        hover.append(`<a href="#" class="name">${music.name}</a>`);
        hover.append(`<a href="#" class="author">${music.author}</a>`);

        let playBtn = $(`<button data-id="${music.id}"></button>`);
        playBtn.append('<i data-action="play" class="play far fa-play-circle"></i>');

        playBtn.click((e) => {

          e = $(e.target);
          let parent = e.parent();
          
          if (e.data('action') == "play") {
            let musicId = parent.data('id');
            App.player.play(musicId);
          } else {
            App.player.pause();
          }

          
        });

        hover.append(playBtn);

        music.DomElement.append(hover);

        musics.set(parseInt(music.id), music);

      }

    };

    request.error = msg => App.addError(msg.responseText);
    request.send();

    return musics;

  }
  getMusicsByAuthor(author) {}
  getMusicByName(name) {}
  search() {}

}