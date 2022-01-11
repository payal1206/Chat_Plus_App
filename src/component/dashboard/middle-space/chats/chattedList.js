import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Hello from "../../right-space/general/default/image/avatar//hello.jpeg";

const ChattedList = (props) => {
  const { details } = props;
  const shortMessage = truncateString(details.message, 30);

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
          secondary={shortMessage}
        />
      </ListItemButton>
      {/* <Typography>{details.timeStamp}</Typography> */}
    </ListItem>
  );
};

export default ChattedList;

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
