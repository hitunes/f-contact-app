import * as ContactTypes from "../actions";

const initialState = {
  sidebarOpen: false,
  active: 0
};

export const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.TOGGLE_SIDEBAR:
      const toggleSidebar = (state.sidebarOpen = !state.sidebarOpen);
      return { ...state, sidebarOpen: toggleSidebar };
    case ContactTypes.ACTIVE_SIDEBAR_LINK:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
