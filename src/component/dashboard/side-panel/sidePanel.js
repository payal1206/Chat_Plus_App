import React from "react";
import classes from "./side-panel.module.css";

import TopIcons from "./top-icons";
import Profile from "./profile";
import Navigation from "./navigation";
import { connect } from "react-redux";
import { selectLogoutComponent,selectAllContactsComponent } from "../../../redux-store/actions/auth";

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
        <Navigation showLogoutComponent={props.LogoutComponent}
        showAllContactsComponent={props.AllContactsComponent} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  LogoutComponent: () => dispatch(selectLogoutComponent()),
  AllContactsComponent:()=>dispatch(selectAllContactsComponent())

});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
