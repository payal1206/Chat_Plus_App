import { combineReducers } from "redux";
import authReducer from "./auth";
import UserReducer from "./users";
import viewReducer from "./view";
import contactReducer from "./contact"

const rootReducer = combineReducers({
  auth_slice: authReducer,
  user_slice: UserReducer,
  view_slice: viewReducer,
  contact_slice:contactReducer
});

export default rootReducer;
