import { User } from "./User";
import { Player } from "./Player";
import { Music } from "./Music"
import { Request } from "./Request";

export class App {

  static user = User.getUser();
  static player = null;
  static request = new Request();
  static app = null;
  static errors = [];
  static basePath = 'http://localhost/app';

  /**
   * App init
   */
  init() {
    App.player = new Player();
    let action = App.request.get("a");
    let genre = App.request.get("g");
    App.app = null;
    this.header();
    this.sidebar();
    App.action(action, {genre: genre});
  }

  /**
   * @return obj App
   */
   static getApp() {
    if (App.app == null) {
      App.app = new App();
    }
    return App.app;
  }
  
  /**
   * Start action
   * @param {*} action action name
   * @param {*} data data
   */
  static action(action = null, data = null) {
    action = action != null ? "action" + action[0].toUpperCase() + action.slice(1) : 'actinIndex';
    let app = App.getApp();
    app[action] ? app[action](data) : app.actionIndex();
  }

  /**
   * Render head
   */
  header() {
    let profile = $("#profile");
    profile.html('');
    if (!App.user.isGuest) {
      let img = $('<img id="ava">').attr("src", App.user.ava);
      profile.append($('<div class="ava"></div>').append(img));
      let name = $(`<span id="name">${App.user.name} ${App.user.surname}</span>`);
      profile.append(name);
    } else {
      let signIn = $('<a href="#">Sign In</a>').attr("data-a", "signIn");
      let signUp = $('<a href="#">Sign Up</a>').attr("data-a", "signUp");
      profile.append(signIn);
      profile.append(signUp);
    }
  }
  
  /**
   * Render sidebar
   */
  sidebar() {
    let request = new Request();
    request.url = App.basePath + '/server/genre.php';
    request.type = 'GET';
    request.dataType = 'json';
    request.success = data => {

      let genres = data;

      if (!genres) App.addError("Error");

      let sidebar = $("#sidebar");
      sidebar.html('');

      for (let i = 0; i < genres.length; i++) {
        let id = genres[i].id;
        let name = genres[i].name;
        let icon = genres[i].fa_icon;
        let li = $(`<li></li>`);
        li.append($(`<a href="#" data-a="genre" data-d="${id}">${name}</a>`)
        .prepend(`<i class="${icon}"></i>`));
        sidebar.append(li);
      }

    };
    request.error = msg => App.addError(msg.responseText);
    request.send();
  }

  /**
   * Reloads the page
   */
  static reload() {
    document.location = App.basePath + "/index.html";
  }

  /**
   * Adds an error to App.errors and calls the init () method. 
   * If the error occurs more than once, reloads the page.
   * 
   * @param {*} msg error text
   * @returns bollean
   */
  static addError(msg) {
    if (App.errors.indexOf(msg) != -1) {
      console.log(msg);
      alert("Произошла непредвиденная ошибка."
      +"\nОтчет об ошибке отправлен в службу поддержки."
      +"\nНажмите ОК, чтобы перезагрузить страницу.");
      App.reload();
    } else {
      App.errors.push(msg);
      (App.getApp()).init();
      return true;
    }
  }

  /**
   * Action for index page
   */
  actionIndex() {

    let request = new Request();
    request.url = App.basePath + '/server/index.php';
    request.type = 'GET';
    request.dataType = 'json';
    request.success = data => {

      let musics = Music.getMusics(data);

      App.player.setMusics(musics);

      this.render();

    };
    request.error = msg => App.addError(msg.responseText);
    request.send();

  }

  /**
   * Displays music from App.player.playlists.musics 
   * in #muscs container
   */
  render() {
    let musics = App.player.playlist.musics;
    let musicContainer = $("#musics");
    musicContainer.html('');

    musics.forEach(function (music) { 
      musicContainer.append(music.DomElement);
    });

  }
  playlists() {}
  actionSignIn(data = null) {}
  actionSignUp(data) {}
  actionGenre(data) {}
  actionUserPlaylist(data) {}



  actionSearch() {}

}

(App.getApp()).init();