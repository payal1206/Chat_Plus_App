import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import hello from "../default/image/avatar/hello.jpeg";

import Hello from "../../right-space/general/default/image/avatar//hello.jpeg";
import { Typography } from "@mui/material";

const ChattedList = (props) => {
  const { details } = props;
  return (
    <ListItem
      divider
      bottom
      disablePadding
      style={{
        padding: "10px",
      }}
    >
      <ListItemIcon>
        <Avatar>
          <Avatar alt="Pemy Sharp" src={Hello} />
        </Avatar>
      </ListItemIcon>
      <ListItemText primary={details.name} secondary={details.message} />
      <Typography>{details.time}</Typography>
    </ListItem>
  );
};

export default ChattedList;
