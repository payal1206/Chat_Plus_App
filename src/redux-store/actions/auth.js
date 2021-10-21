const LOGIN = "LOGIN-USER";
const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

//action creators
const loginUser = (data) => {
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

export {
  LOGIN,
  loginUser,
  SIGNUP,
  selectSigninComponent,
  SIGNIN,
  selectSignupComponent,
};
