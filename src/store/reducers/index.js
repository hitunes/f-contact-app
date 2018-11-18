/*jshint esversion: 6 */
import { combineReducers } from "redux";
import { SearchReducer } from "./search";
import { SidebarReducer } from "./sidebar";
import { ContactReducer } from "./mainContact";
import { NewContactModalReducer } from "./newContactModal";
import { EditContactModalReducer } from "./editContactModal";
import { ViewContactDetailsReducer } from "./viewContactDetails";

export default combineReducers({
  sidebar: SidebarReducer,
  search: SearchReducer,
  contacts: ContactReducer,
  newContact: NewContactModalReducer,
  editContact: EditContactModalReducer,
  viewContact: ViewContactDetailsReducer
});
