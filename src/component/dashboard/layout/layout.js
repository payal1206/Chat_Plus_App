import React from "react";
import classes from "./layout.module.css";
import { Paper } from "@material-ui/core";

const Layout = (props) => {
  return (
    <div className={classes.appBackground}>
      <Paper className={classes.muiPaper}>{props.children}</Paper>
    </div>
  );
};

export default Layout;
