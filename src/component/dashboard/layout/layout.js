import React from "react";
import classes from "./layout.module.css";
import { Paper, Grid } from "@material-ui/core";

import { red } from "@material-ui/core/colors";
import Form1 from "../../signin/form1";

const Layout = (props) => {
  return (
    <>
      <div className={classes.appBackground}>
        <Paper className={classes.muiPaper}>{props.children}</Paper>
      </div>
    </>
  );
};

export default Layout;
