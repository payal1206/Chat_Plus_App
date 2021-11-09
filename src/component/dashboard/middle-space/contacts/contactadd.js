import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupIcon from "@mui/icons-material/Group";
const bkcol = "rgb(161, 174, 187)";
const Contactadd = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <GroupIcon style={{ color: bkcol }} />
        </ListItemIcon>
        <ListItemText primary="New Contact" />
      </ListItemButton>
    </ListItem>
  );
};

export default Contactadd;
