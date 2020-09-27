import * as CONSTANTS from "./CONSTANTS.js";
import fetchJson from "./api.js";
import UserCard from "./components/UserCard.js";
import UserImage from "./components/UserImage.js";
import UserInfo from "./components/UserInfo.js";
import User from "./components/User.js";

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
