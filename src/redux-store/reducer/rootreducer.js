import { combineReducers } from "redux";
import authReducer from "./auth";
import UserReducer from "./users";
import viewReducer from "./view";

const rootReducer = combineReducers({
  auth_slice: authReducer,
  user_slice: UserReducer,
  view_slice: viewReducer,
});

export default rootReducer;
