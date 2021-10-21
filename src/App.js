import React from "react";
import "./App.css";

import Layout from "./component/dashboard/layout/layout";
import Dashboard from "./component/dashboard/dashboard";
import Signin from "./component/signin/signin";
import Signup from "./component/signup/signup";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Layout>
        {props.component.isDashboard ? (
          <Dashboard />
        ) : props.component.isSignup ? (
          <Signup />
        ) : props.component.isSignin ? (
          <Signin />
        ) : null}
      </Layout>
    </div>
  );
}
const mapStatetoProps = (state) => {
  return {
    component: state.auth_slice, // key
  };
};

export default connect(mapStatetoProps, null)(App);

// usehistory()->redirecting
