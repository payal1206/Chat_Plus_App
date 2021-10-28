const LOGIN = "LOGIN-USER";
const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";
const LOGOUT = "LOGOUT";

//action creators
const loginUser = (data) => {
  console.log(data, "in action");
  return {
    type: LOGIN,
    payload: data,
  };
};
const selectSigninComponent = () => {
  return {
    type: SIGNIN,
  };
};
const selectSignupComponent = () => {
  return {
    type: SIGNUP,
  };
};
const selectLogoutComponent = () => {
  return {
    type: LOGOUT,
  };
};

export {
  LOGIN,
  loginUser,
  SIGNUP,
  selectSigninComponent,
  SIGNIN,
  selectSignupComponent,
  LOGOUT,
  selectLogoutComponent,
};
