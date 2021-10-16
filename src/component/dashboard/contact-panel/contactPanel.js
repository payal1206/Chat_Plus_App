import React from "react";
import Divider from "@mui/material/Divider";
import classes from "../dashboard.module.css";

import ContactHead from "./contact-head";
import ContactSearch from "./search";

function ContactPanel() {
  return (
    <div className={classes.contactPanelDiv}>
      <div className={classes.contactPanelHead}>
        <ContactHead />
      </div>
      <div className={classes.search}>
        <ContactSearch />
      </div>
      <Divider />
      <div className={classes.contactList}>ContactPanel List</div>
    </div>
  );
}

export default ContactPanel;
