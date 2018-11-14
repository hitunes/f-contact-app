import * as ContactTypes from "../actions";

const initialState = {
  showEditContactModal: false,
  contactInfo: []
};
export const EditContactModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.SHOW_EDIT_MODAL:
      return {
        ...state,
        showEditContactModal: !state.showModal,
        contactInfo: action.payload
      };
    case ContactTypes.HIDE_EDIT_MODAL:
      return { ...state, showEditContactModal: false };
    default:
      return state;
  }
};
