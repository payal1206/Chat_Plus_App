import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import hello from "../default/image/avatar/hello.jpeg";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Dropdown } from "antd";
import Hello from "../../right-space/general/default/image/avatar//hello.jpeg";
import { Typography } from "@mui/material";

const ChattedList = (props) => {
  const { details } = props;
  return (
    <ListItem
      divider
      disablePadding
      // style={{
      //   padding: "10px",
      // }}
    >
      <ListItemButton>
        <ListItemIcon>
          <Avatar>
            <Avatar alt="Pemy Sharp" src={Hello} />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          onClick={props.showTheChatComponent}
          primary={details.fullname}
          secondary={details.message}
        />
      </ListItemButton>
      {/* <Typography>{details.timeStamp}</Typography> */}
    </ListItem>
  );
};

export default ChattedList;
