/*jshint esversion: 6 */
import { combineReducers } from "redux";
import { ContactReducer } from "./reducer";
import { SidebarReducer } from "./sidebar";
import { NewContactModalReducer } from "./newContactModal";
import { EditContactModalReducer } from "./editContactModal";
import { ViewContactDetailsReducer } from "./viewContactDetails";

export default combineReducers({
  contacts: ContactReducer,
  sidebar: SidebarReducer,
  newContact: NewContactModalReducer,
  editContact: EditContactModalReducer,
  viewContact: ViewContactDetailsReducer
});
