import * as ContactTypes from "../actions";

const initialState = {
  showNewContactModal: false
};
export const NewContactModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.SHOW_NEW_MODAL:
      return { ...state, showNewContactModal: !state.showModal };
    case ContactTypes.HIDE_NEW_MODAL:
      return { ...state, showNewContactModal: false };
    default:
      return state;
  }
};
