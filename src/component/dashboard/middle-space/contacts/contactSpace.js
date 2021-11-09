// import React from "react";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Avatar from "@mui/material/Avatar";
// import hello from "./avatar/hello.jpeg";

import React from "react";
import Divider from "@mui/material/Divider";
import classes from "../../dashboard.module.css";
import AddNewContact from "./contactadd";

import ContactHead from "./contact-head";
import Search from "../general/search";

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
        {
          <AddNewContact />
          /* <ContactLists /> */
        }
      </div>
    </div>
  );
}

export default ContactSpace;

{
  /* <ListItem divider bottom disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Avatar>
            <Avatar alt="Pemy Sharp" src={hello} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Payal Jain" />
      </ListItemButton>
      <p
        style={{
          float: "right",
          marginRight: "15px",
          fontSize: "15px",
          color: "grey",
        }}
      >
        15:30
      </p>
    </ListItem> */
}
