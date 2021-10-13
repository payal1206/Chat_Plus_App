import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./dashboard.module.css";

import Layout from "./layout/layout";
import SidePanel from "./side-panel/sidePanel";
import MessagePanel from "./message-panel/messagePanel";
import ContactPanel from "./contact-panel/contactPanel";

export default function Dashboard() {
  return (
    <Layout>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={2} className={classes.sidePanel}>
          <SidePanel />
        </Grid>
        <Grid item lg={3} className={classes.contactPanel}>
          <ContactPanel />
        </Grid>
        <Grid item lg={7} className={classes.messagePanel}>
          <MessagePanel />
        </Grid>
      </Grid>
    </Layout>
  );
}
