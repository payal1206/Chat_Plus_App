import React from "react";
import "./App.css";
import { db } from "./firebase/config";
import { query, collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import Layout from "./component/dashboard/layout/layout";
import Dashboard from "./component/dashboard/dashboard";
import Signin from "./component/signin/signin";
import Signup from "./component/signup/signup";

import { connect } from "react-redux";

function App(props) {
  const {
    displayComponent: { showSigninComponent, showSignupComponent },
    user: { loggedin },
  } = props.userAuth;

  // React.useEffect(
  //   () =>
  //     onSnapshot(collection(db, "users"), (snapshot) =>
  //       console.log(snapshot.docs[0]._document.data.value.mapValue.fields)
  //     ),
  //   []
  // );

  React.useEffect(
    () =>
      onSnapshot(query(collection(db, "users")), (x) =>
        console.log(x.docs[0]._document.data.value.mapValue.fields)
      ),
    []
  );
  // console.log(collection(db, "users"));
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
