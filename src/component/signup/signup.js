import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signup.module.css";
import SignupForm from "./form2";

function Signup() {
  return (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6}>
          <div className={classes.item1}></div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.item2}>
            <SignupForm />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Signup;
