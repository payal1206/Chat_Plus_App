import React from "react";
import { Paper } from "@material-ui/core";
import classes from "./signin.css";
import Form1 from "../../signin/form1";

export const Signin = () => {
  return (
    <div className={classes.appBackground}>
      <Paper className={classes.muiPaper}>
        <div className={classes.grid}>
          <div className={classes.item1}></div>
          <div className={classes.item2}>{<Form1 />}</div>
        </div>
      </Paper>
    </div>
  );
};
