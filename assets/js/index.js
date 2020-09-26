import UserCard from "./components/UserCard.js";
import UserImage from "./components/UserImage.js";
import User from "./components/User.js";
import { fetchJson } from "./api.js";
import * as CONSTANTS from "./CONSTANTS.js";
import UserInfo from "./components/UserInfo.js";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");

  const users = await fetchJson();

  const userCards = users.map((user) => {
    const preparedUser = new User(user);
    return new UserCard(preparedUser).render();
  });
  const header = await createHeader();
  root.append(header, ...userCards);
});

async function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const userContainer = document.createElement("div");
  userContainer.classList.add("userContainer");

  const userData = await fetchJson(
    `${CONSTANTS.API_BASE_URL}${CONSTANTS.AUTH_USER_URL}`
  );
  const preparedUser = new User(userData);
  const img = new UserImage(preparedUser, "userImage").render();

  const info = new UserInfo(preparedUser).render();
  userContainer.append(img, info);
  header.append(userContainer);

  console.log(header);

  return header;
}
