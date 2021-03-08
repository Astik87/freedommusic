export class User {

  static user = null;
  isGuest = true;
  id = null;
  name = null;
  surname = null;
  email = null;

  static getUser() {
    if (User.user == null) {
      let user = new User();
      user.signIn();
      User.user = user;
    }

    return User.user;

  }

  signIn(email = null, password = null) {}
  signUp() {}

}