import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signup.module.css";
import Form2 from "./form2";

function Signup() {
  return (
    // <div className={classes.appBackground}>
    <Paper className={classes.muiPaper}>
      <div className={classes.grid}>
        <div className={classes.item1}></div>
        <div className={classes.item2}>{<Form2 />}</div>
      </div>
    </Paper>
    // </div>
  );
}

export default Signup;
