export default class UserImage {
  constructor(user, imgClass) {
    this._user = user;
    this._class = imgClass;
  }

  get user() {
    return this._user;
  }

  createBackgroundColor() {
    //thanks stack overflow
    function hashCode(str) {
      // java String#hashCode
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    }

    function intToRGB(i) {
      let c = (i & 0x00ffffff).toString(16).toUpperCase();

      return "00000".substring(0, 6 - c.length) + c;
    }
    return `#${intToRGB(hashCode(this._user.fullName))}`;
  }

  createInitials() {
    const initials = document.createElement("span");
    initials.classList.add("userInitials");
    initials.textContent = this.user.fullName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return initials;
  }

  onErrorImageHandler(event) {
    event.target.remove();
  }

  createImage() {
    const img = document.createElement("img");
    img.src = this.user.imgSrc;
    img.classList.add(this._class);
    img.addEventListener("error", this.onErrorImageHandler);
    return img;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("userImageWrapper");
    wrapper.style.backgroundColor = this.createBackgroundColor() || "green";
    wrapper.append(this.createInitials(), this.createImage());
    return wrapper;
  }
}
