import { combineReducers } from "redux";
import displayComponentReduce from "./display-component";

const rootReducer = combineReducers({
  displayComponent_slice: displayComponentReduce,
});

export default rootReducer;
