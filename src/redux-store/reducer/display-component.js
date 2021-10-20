import { DISPLAY } from "../actions/display-component";

const initialState = {
  isDashboard: false,
  isSignin: true,
  isSignup: false,
};

function displayComponentReducer(state = initialState, action) {
  return state;
}

export default displayComponentReducer;
