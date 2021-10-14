import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signin.module.css";
import SigninForm from "./form1";

function Signin() {
  return (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6}>
          <div className={classes.item1}></div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.item2}>
            <SigninForm />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Signin;
