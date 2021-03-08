import { User } from "./User";
import { Player } from "./Player";

export class App {

  static user = User.getUser();
  static player = null;

  static reload() {}
  static action(action = null, data = null) {}
  init() {}
  render() {}
  header() {}
  sidebar() {}
  playlists() {}
  actionIndex() {}
  actionSignIn(data) {}
  actionSignUp(data) {}
  actionGenre(data) {}
  actionUserPlaylist(data) {}



  actionSearch() {}

}

(new App).init();