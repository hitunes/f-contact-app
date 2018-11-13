import * as ContactTypes from "./types";

export const starContact = payload => ({
  type: ContactTypes.STAR_CONTACT,
  payload
});
export const unStarContact = payload => ({
  type: ContactTypes.UNSTAR_CONTACT,
  payload
});
