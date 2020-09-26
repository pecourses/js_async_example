import UserImage from "./UserImage.js";
import User from "./User.js";
import UserInfo from "./UserInfo.js";

export default class UserCard {
  constructor(user, infoClass = "userCardInfo", imgClass = "userImage") {
    if (user instanceof User) {
      this._user = user;
      this._image = new UserImage(user, imgClass);
      this._info = new UserInfo(user, infoClass);
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

  createButton() {
    const btn = document.createElement("button");
    btn.classList.add("contactButton");
    btn.textContent = "Connect";

    return btn;
  }

  render() {
    const card = document.createElement("article");
    card.classList.add("userCard");

    card.append(this.image.render(), this._info.render(), this.createButton());
    return card;
  }
}
