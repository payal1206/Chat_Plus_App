import { LOGIN, LOGOUT, SIGNIN, SIGNUP } from "../actions/auth";

const initialState = {
  displayComponent: {
    showSigninComponent: true,
    showSignupComponent: false,
  },
  user: {
    id: "",
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
          id: action.payload.id,
          username: action.payload.username,
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
          id:'',
          username: '',
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
