export default class UserInfo {
  constructor(user, infoClass) {
    this._user = user;
    this._class = infoClass;
  }

  render() {
    const info = document.createElement("div");
    info.classList.add(this._class);

    const name = document.createElement("h1");
    name.textContent = this._user.fullName;

    const position = document.createElement("p");
    position.textContent = this._user.position;

    info.append(name, position);
    return info;
  }
}
