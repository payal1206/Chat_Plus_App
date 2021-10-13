import React from "react";
import classes from "./layout.module.css";

const Layout = (props) => {
  return <div className={classes.appBackground}>{props.children}</div>;
};

export default Layout;
