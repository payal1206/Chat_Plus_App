const DASHBOARD = "DASHBOARD";
const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";

//action creators
const selectDashboardComponent = (data) => {
  return {
    type: DASHBOARD,
    // payload: data,
  };
};
const selectSigninComponent = (data) => {
  return {
    type: SIGNIN,
    // payload: data,
  };
};
const selectSignupComponent = (data) => {
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
