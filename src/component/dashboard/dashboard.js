import React from "react";
import { Paper } from "@material-ui/core";

export default function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: "#0000ff",
        width: "100%",
        height: "720px",
        padding: "20px",
      }}
    >
      {/* <div></div> */}
      <Paper
        style={{
          height: "600px",
          width: "90%",
          marginLeft: "70px",
          marginTop: "30px",
          marginRight: "120px",
          marginBottom: "60px",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </Paper>
    </div>
  );
}
