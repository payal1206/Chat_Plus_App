import React from "react";
import Divider from "@mui/material/Divider";
import classes from "../../dashboard.module.css";
import AddNewContact from "./contactadd";

import ContactHead from "./contact-head";
import Search from "../general/search";
import ContactList from "./contactList";
function ContactSpace() {
  return (
    <div className={classes.contactPanelDiv}>
      <div className={classes.contactPanelHead}>
        <ContactHead />
      </div>
      <div className={classes.search}>
        <Search />
      </div>
      <Divider />
      <div className={classes.contactList}>
        <AddNewContact />
        <ContactList />
      </div>
    </div>
  );
}

export default ContactSpace;
