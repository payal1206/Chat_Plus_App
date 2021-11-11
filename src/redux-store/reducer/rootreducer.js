import { combineReducers } from "redux";
import authReducer from "./auth";
import UserReducer from "./users";
import viewReducer from "./view";
import contactReducer from "./contact";
import chatEmailUI from "./chat_email_view";

const rootReducer = combineReducers({
  auth_slice: authReducer,
  user_slice: UserReducer,
  view_slice: viewReducer,
  chat_email_ui_slice: chatEmailUI,
  contact_slice: contactReducer,
});

export default rootReducer;
