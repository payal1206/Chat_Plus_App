import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./dashboard.module.css";

import SidePanel from "./side-panel/sidePanel";
import RightSpace from "./right-space/chat/rightSpace";
import MiddleSpace from "./middle-space/general/middleSpace";
import Loading from "./loading/loading";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 7);

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
