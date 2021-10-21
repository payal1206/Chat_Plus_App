import { DASHBOARD, SIGNIN, SIGNUP } from "../actions/display-component";

const initialState = {
  isDashboard: false,
  isSignin: true,
  isSignup: false,
};

function displayComponentReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD:
      return { isDashboard: true, isSignin: false, isSignup: false };
    case SIGNUP:
      return { isDashboard: false, isSignin: false, isSignup: true };
    case SIGNIN:
      return { isDashboard: false, isSignin: true, isSignup: false };

    default:
      return state;
  }
}

export default displayComponentReducer;
