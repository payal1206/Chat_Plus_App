import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import hello from "../default/image/avatar/hello.jpeg";

import Hello from "../../right-space/general/default/image/avatar//hello.jpeg";

const ChattedList = (props) => {
  return (
    <ListItem divider bottom disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Avatar>
            <Avatar alt="Pemy Sharp" src={Hello} />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary="Pemy Sharp"
          secondary="hello Payal, Please don't forget to cook..."
        />
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

export default ChattedList;
