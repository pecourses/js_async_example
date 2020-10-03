import * as CONSTANTS from "./CONSTANTS.js";
import fetchJson from "./api.js";
import UserCard from "./components/UserCard.js";
import UserImage from "./components/UserImage.js";
import UserInfo from "./components/UserInfo.js";
import User from "./components/User.js";
import DataLoader from "./utils/DataLoader.js";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");

  const users = await fetchJson();

  const authUserData = await getAuthuser();
  localStorage.setItem("user", JSON.stringify(authUserData));

  const userCards = users.map((user) => new UserCard(new User(user)).render());
  const header = createHeader(authUserData);

  root.append(header, ...userCards);
});

function getAuthuser() {
  const store = localStorage.getItem("user");
  console.log(store);
  if (store) {
    return JSON.parse(store);
  }
  return fetchJson(`${CONSTANTS.API_BASE_URL}${CONSTANTS.AUTH_USER_URL}`);
}

function createHeader(userData) {
  const preparedUser = new User(userData);

  const header = document.createElement("header");
  header.classList.add("header");

  const userContainer = document.createElement("div");
  userContainer.classList.add("userContainer");

  userContainer.append(
    new UserImage(preparedUser, "userImage").render(),
    new UserInfo(preparedUser).render()
  );
  header.append(userContainer);
  return header;
}

const data = DataLoader.fetch("../../user.json", "json");
console.log(data);

function getPrice(price, discount, amount) {
  return price * amount - price * amount * discount;
}

function getPriceWithCarryngArrowFunc(price) {
  return (discount) => (amount) => price * amount - price * amount * discount;
}
getPrice(50, 0.02, 1);
getPrice(50, 0.02, 3);
getPrice(500, 0.02, 65);
getPrice(50, 0.02, 324);

const getPriceWithValue50 = getPriceWithCarryng(50);
const getPriceWithValue50AndDiscount2version1 = getPriceWithValue50(0.02);
const getPriceWithValue50AndDiscount2version2 = getPriceWithCarryng(50)(0.02);

console.log(getPriceWithValue50AndDiscount2version2(1));

function getPriceWithCarryng(price) {
  return function (discount) {
    return function (amount) {
      return price * amount - price * amount * discount;
    };
  };
}

const iPhone = {
  price: 10000,
  getCost: getPriceWithCarryngArrowFunc(this.price),
};

console.log(getPrice(50, 0.02, 10));
