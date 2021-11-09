import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import hello from "./avatar/hello.jpeg";

const ContactSpace = (props) => {
  return (
    <ListItem divider bottom disablePadding>
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
    </ListItem>
  );
};

export default ContactSpace;