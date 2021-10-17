import React from "react";
import "./App.css";

import Layout from "./component/dashboard/layout/layout";
import Dashboard from "./component/dashboard/dashboard";
import Signin from "./component/signin/signin";
import Signup from "./component/signup/signup";

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
        {/* <Signup /> */}
        {/* <Signin /> */}
      </Layout>
    </div>
  );
}

export default App;

// usehistory()->redirecting
