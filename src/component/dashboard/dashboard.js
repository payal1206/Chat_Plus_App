import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./dashboard.module.css";

import SidePanel from "./side-panel/sidePanel";
import MessagePanel from "./message-panel/messagePanel";
import ContactPanel from "./contact-panel/contactPanel";
import DefaultPage from "./default/defaultpage";
import Loading from "./loading/loading";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 7000);

  const mainDashboard = (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={2} className={classes.sidePanel}>
          <SidePanel />
        </Grid>
        <Grid item lg={3} className={classes.contactPanel}>
          <ContactPanel />
        </Grid>
        <Grid item lg={7} className={classes.messagePanel}>
          {/* <MessagePanel /> */}
          <DefaultPage />
        </Grid>
      </Grid>
    </Paper>
  );

  return isLoading ? <Loading /> : mainDashboard;
}
