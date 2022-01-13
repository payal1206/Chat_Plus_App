import { LOGIN, LOGOUT, SIGNIN, SIGNUP } from "../actions/auth";

const initialState = {
  displayComponent: {
    showSigninComponent: true,
    showSignupComponent: false,
  },
  user: {
    id: "",
    phone: "",
    username: "",
    loggedin: false,
  },
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        displayComponent: {
          showSigninComponent: false,
          showSignupComponent: false,
        },
        user: {
          ...action.payload,
          loggedin: true,
        },
      };
    case SIGNUP:
      return {
        ...state,
        displayComponent: {
          showSigninComponent: false,
          showSignupComponent: true,
        },
      };
    case SIGNIN:
      return {
        ...state,
        displayComponent: {
          showSigninComponent: true,
          showSignupComponent: false,
        },
      };
    case LOGOUT:
      return {
        displayComponent: {
          showSigninComponent: true,
          showSignupComponent: false,
        },
        user: {
          id: "",
          username: "",
          phone: "",
          loggedin: false,
        },

        // ...state,
        // initialState.user.loggedin=false,
        // displayComponent: {
        //   showSigninComponent: true,
        //   showSignupComponent: true,
        // },
      };

    default:
      return state;
  }
}

export default authReducer;
