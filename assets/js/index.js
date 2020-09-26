import UserCard from "./components/UserCard.js";
import User from "./components/User.js";
import { fetchJson } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  fetchJson().then((users) => {
    const userCards = users.map((user) => {
      const preparedUser = new User(user);
      return new UserCard(preparedUser).render();
    });

    root.append(...userCards);
  });
});
