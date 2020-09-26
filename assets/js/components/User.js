export default class User {
  constructor(props) {
    const { id, firstName, lastName, profilePicture } = props;
    this._id = id;
    this._firstName = firstName || "Anonym";
    this._lastName = lastName;
    this._position = this.createRandomPosition();
    this._imgSrc = profilePicture;
  }

  createRandomPosition() {
    return "Junior web dev";
  }

  get position() {
    return this._position;
  }

  get id() {
    return this._id;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get imgSrc() {
    return this._imgSrc;
  }
}

