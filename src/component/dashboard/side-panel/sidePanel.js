import React from "react";
import classes from "./side-panel.module.css";

import TopIcons from "./top-icons";
import Profile from "./profile";
import Navigation from "./navigation";

function SidePanel(props) {
  return (
    <div>
      <div className={classes.topIcons}>
        <TopIcons />
      </div>
      <div className={classes.profileDiv}>
        <Profile />
      </div>
      <div className={classes.navigations}>
        <Navigation />
      </div>
    </div>
  );
}

export default SidePanel;
