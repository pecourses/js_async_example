import UserImage from "./UserImage.js";
import User from "./User.js";

export default class UserCard {
  constructor(user) {
    if (user instanceof User) {
      this._user = user;
      this._image = new UserImage(user);
    } else {
      throw new TypeError("given value must be an instance of User class");
    }
  }

  get user() {
    return this._user;
  }
  get image() {
    return this._image;
  }

  createInfo() {
    const info = document.createElement("div");
    info.classList.add("userCardInfo");

    const name = document.createElement("h1");
    name.textContent = this.user.fullName;

    const position = document.createElement("p");
    position.textContent = this.user.position;

    info.append(name, position);
    return info;
  }

  createButton() {
    const btn = document.createElement("button");
    btn.classList.add("contactButton");
    btn.textContent = "Connect";

    return btn;
  }

  render() {
    const card = document.createElement("article");
    card.classList.add("userCard");

    card.append(this.image.render(), this.createInfo(), this.createButton());
    return card;
  }
}
