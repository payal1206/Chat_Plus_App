import React from "react";
import { Paper } from "@material-ui/core";
import classes from "./signin.module.css";
import Form1 from "./form1";

const Signin = () => {
  return (
    <Paper className={classes.muiPaper}>
      <div className={classes.grid}>
        <div className={classes.item1}>agahj</div>
        <div className={classes.item2}>
          <Form1 />
        </div>
      </div>
    </Paper>
  );
};

export default Signin;
