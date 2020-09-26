import * as CONSTANTS from "./CONSTANTS.js";

export function fetchJson(url = `${CONSTANTS.API_BASE_URL}${CONSTANTS.USERS_URL}`) {
    return fetch(url).then((res) => res.json());
  }