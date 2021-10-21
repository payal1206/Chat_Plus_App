import { combineReducers } from "redux";
import authReducer from "./auth";

const rootReducer = combineReducers({
  auth_slice: authReducer,
});

export default rootReducer;
