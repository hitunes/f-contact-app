import { combineReducers } from "redux";
import { ContactReducer } from "./reducer";
import { SidebarReducer } from "./sidebar";

export default combineReducers({
  contacts: ContactReducer,
  sidebar: SidebarReducer
});
