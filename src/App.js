import React from "react";
import "./App.css";
import Layout from "./component/dashboard/layout/layout";
import Dashboard from "./component/dashboard/dashboard";
import Signin from "./component/signin/signin";
import Signup from "./component/signup/signup";
import { addUserToFirestore } from "./firebase/database";
import { connect } from "react-redux";

function App(props) {
  const {
    displayComponent: { showSigninComponent, showSignupComponent },
    user: { loggedin },
  } = props.userAuth;

  return (
    <div className="App">
      <Layout>
        {loggedin ? (
          <Dashboard />
        ) : showSignupComponent ? (
          <Signup />
        ) : showSigninComponent ? (
          <Signin />
        ) : null}
      </Layout>
    </div>
  );
}
const mapStatetoProps = (state) => {
  return {
    userAuth: state.auth_slice, // state->object in root reducer
  };
};

export default connect(mapStatetoProps, null)(App);

// usehistory()->redirecting
