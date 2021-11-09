import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import GroupIcon from "@mui/icons-material/Group";
const bkcol = "rgb(161, 174, 187)";

const Contactadd = (props) => {
  return (
    <ListItem
      disablePadding
      onClick={props.handleClick}
      sx={{ height: "70px" }}
    >
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
