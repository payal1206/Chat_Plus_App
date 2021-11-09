import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, Dropdown } from "antd";

const ContactListItem = (props) => {
  return (
    <>
      <ListItem divider bottom disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Avatar>
              <Avatar alt="Pemy Sharp" src="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Payal Jain" secondary="jainpayal@test.com" />
          <MoreVertOutlinedIcon style={{ color: "gray" }} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ContactListItem;
