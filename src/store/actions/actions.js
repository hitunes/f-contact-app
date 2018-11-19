import * as ContactTypes from "./types";
// actions waiting to be dispatched
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
export const deleteSingleContact = payload => ({
  type: ContactTypes.DELETE_SINGLE_CONTACT,
  payload
});
export const showNewContactModal = payload => ({
  type: ContactTypes.SHOW_NEW_MODAL,
  payload
});
export const hideNewContactModal = payload => ({
  type: ContactTypes.HIDE_NEW_MODAL,
  payload
});
export const showEditContactModal = payload => ({
  type: ContactTypes.SHOW_EDIT_MODAL,
  payload
});

export const hideEditContactModal = payload => ({
  type: ContactTypes.HIDE_EDIT_MODAL,
  payload
});
export const hideViewContactModal = payload => ({
  type: ContactTypes.HIDE_VIEW_MODAL,
  payload
});
export const showViewContactModal = payload => ({
  type: ContactTypes.SHOW_VIEW_MODAL,
  payload
});
export const handleInputChange = payload => ({
  type: ContactTypes.HANDLE_INPUT_CHANGE,
  payload
});
export const handleEditInputChange = payload => ({
  type: ContactTypes.HANDLE_EDIT_INPUT_CHANGE,
  payload
});
export const handleNewContactSubmit = payload => ({
  type: ContactTypes.HANDLE_NEW_CONTACT_SUBMIT,
  payload
});
export const handleEditContactSubmit = payload => ({
  type: ContactTypes.HANDLE_EDIT_CONTACT_SUBMIT,
  payload
});
export const showDeleteSingleContact = payload => ({
  type: ContactTypes.TOGGLE_DELETE_SINGLE_CONTACT,
  payload
});
export const handleSearchChange = payload => ({
  type: ContactTypes.HANDLE_SEARCH_CHANGE,
  payload
});
export const handleSearchOnclick = payload => ({
  type: ContactTypes.HANDLE_SEARCH_ONCLICK,
  payload
});
