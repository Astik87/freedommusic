import { User } from "./User";
import { Player } from "./Player";
import { Request } from "./Request";

export class App {

  static user = User.getUser();
  static player = null;
  static request = new Request();
  static app = null;

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
   * App init
   */
  init() {
    let action = App.request.get("a");
    let genre = App.request.get("g");
    App.app = null;
    this.header();
    this.sidebar();
    App.action(action, {genre: genre});
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
  
  sidebar() {}

  static reload() {}
  render() {}
  playlists() {}
  actionIndex() {}
  actionSignIn(data = null) {}
  actionSignUp(data) {}
  actionGenre(data) {}
  actionUserPlaylist(data) {}



  actionSearch() {}

}

(App.getApp()).init();