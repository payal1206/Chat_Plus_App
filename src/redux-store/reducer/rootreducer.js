import { combineReducers } from "redux";
import authReducer from "./auth";
import UserReducer from "./users";

const rootReducer = combineReducers({
  auth_slice: authReducer,
  user_slice: UserReducer,
});

export default rootReducer;
