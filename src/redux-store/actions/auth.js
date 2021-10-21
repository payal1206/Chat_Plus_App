const DASHBOARD = "DASHBOARD";
const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

//action creators
const selectDashboardComponent = () => {
  return {
    type: DASHBOARD,
    // payload: data,
  };
};
const selectSigninComponent = () => {
  return {
    type: SIGNIN,
    // payload: data,
  };
};
const selectSignupComponent = () => {
  return {
    type: SIGNUP,
    // payload: data,
  };
};

export {
  DASHBOARD,
  selectDashboardComponent,
  SIGNUP,
  selectSigninComponent,
  SIGNIN,
  selectSignupComponent,
};
