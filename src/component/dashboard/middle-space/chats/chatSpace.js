import React from "react";
import Divider from "@mui/material/Divider";
import classes from "../../dashboard.module.css";

import ChatHead from "./chats-head";
import Search from "../general/search";
import ChattedLists from "./chattedLists";

function ContactPanel() {
  return (
    <div className={classes.contactPanelDiv}>
      <div className={classes.contactPanelHead}>
        <ChatHead />
      </div>
      <div className={classes.search}>
        <Search />
      </div>
      <Divider />
      <div className={classes.contactList}>
        <ChattedLists />
      </div>
    </div>
  );
}

export default ContactPanel;
