import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./dashboard.module.css";

import SidePanel from "./side-panel/sidePanel";
import RightSpace from "./right-space/chat/rightSpace";
import MiddleSpace from "./middle-space/general/middleSpace";
import Loading from "./loading/loading";
import { setAllContacts, setAllRecentChats } from "../../firebase/database";
import { setAllContactsInRedux } from "../../redux-store/actions/contact";
import { setAllRecentChatsInRedux } from "../../redux-store/actions/chat";

import { connect } from "react-redux";

function Dashboard(props) {
  const [isLoading, setIsLoading] = useState(true);

  const initialAppData = async () => {
    const contacts = await setAllContacts(props.userId);
    const recentChats = await setAllRecentChats(props.userId);
    props.setAllContacts(contacts);
    props.setAllRecentChats(recentChats);
    if (contacts && recentChats) {
      setIsLoading(false);
    }
  };
  useEffect(() => initialAppData(), []);
  //
  const mainDashboard = (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={2} className={classes.sidePanel}>
          <SidePanel />
        </Grid>
        <Grid item lg={3} className={classes.contactPanel}>
          <MiddleSpace />
        </Grid>
        <Grid item lg={7} className={classes.messagePanel}>
          <RightSpace />
        </Grid>
      </Grid>
    </Paper>
  );

  return isLoading ? <Loading /> : mainDashboard;
}
const mapStateToProps = (state) => ({
  userId: state.auth_slice.user.id,
});

const mapDispatchtoProps = (dispatch) => ({
  setAllContacts: (data) => dispatch(setAllContactsInRedux(data)),
  setAllRecentChats: (data) => dispatch(setAllRecentChatsInRedux(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Dashboard);
