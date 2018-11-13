import { combineReducers } from "redux";
import { ContactReducer } from "./reducer";

export default combineReducers({
  contacts: ContactReducer
});
