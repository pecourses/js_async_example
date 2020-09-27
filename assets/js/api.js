import * as CONSTANTS from "./CONSTANTS.js";

export default async function (
  url = `${CONSTANTS.API_BASE_URL}${CONSTANTS.USERS_URL}`
) {
  const response = await fetch(url);
  return response.json();
}
