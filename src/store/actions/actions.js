import * as ContactTypes from "./types";

export const starContact = payload => ({
  type: ContactTypes.STAR_CONTACT,
  payload
});
export const unStarContact = payload => ({
  type: ContactTypes.UNSTAR_CONTACT,
  payload
});
export const toggleSidebar = payload => ({
  type: ContactTypes.TOGGLE_SIDEBAR,
  payload
});
export const activeSidebarLink = payload => ({
  type: ContactTypes.ACTIVE_SIDEBAR_LINK,
  payload
});
export const markToDelete = payload => ({
  type: ContactTypes.MARK_TO_DELETE,
  payload
});
export const deleteMultiple = payload => ({
  type: ContactTypes.DELETE_MULTIPLE_CONTACT,
  payload
});
