import { DASHBOARD } from "../actions/display-component";

const initialState = {
  isDashboard: false,
  isSignin: true,
  isSignup: false,
};

function displayComponentReducer(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD:
      return {
        ...state,
        isDashboard: true,
      };
  }
  return state;
}

export default displayComponentReducer;
