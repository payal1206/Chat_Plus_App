import React from "react";
import "./App.css";

import Layout from "./component/dashboard/layout/layout";
import Dashboard from "./component/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;

// usehistory()->redirecting
