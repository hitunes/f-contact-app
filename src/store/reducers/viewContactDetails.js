import * as ContactTypes from "../actions";

const initialState = {
  showViewContactModal: false,
  contactInfo: [],
  showDelete: false
};
export const ViewContactDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.SHOW_VIEW_MODAL:
      return {
        ...state,
        showViewContactModal: true,
        contactInfo: action.payload
      };
    case ContactTypes.HIDE_VIEW_MODAL:
      return { ...state, showViewContactModal: action.payload };
    case ContactTypes.TOGGLE_DELETE_SINGLE_CONTACT:
      return { ...state, showDelete: !state.showDelete };
    default:
      return state;
  }
};
