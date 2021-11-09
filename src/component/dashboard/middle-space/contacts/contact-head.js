import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupsIcon from "@mui/icons-material/Groups";
import Divider from "@mui/material/Divider";

const ContactHead = () => {
  return (
    <>
      <ListItem style={{ padding: "20px" }}>
        <ListItemIcon>
          <GroupsIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="Contacts"
          secondary="No Contacts"
          style={{ fontWeight: "bolder" }}
        />
      </ListItem>
      <Divider style={{ marginTop: "10px" }} />
    </>
  );
};

export default ContactHead;
