import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

const Contacts = () => {
  return (
    <div>
      <List>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <Avatar alt="Pemy Sharp" src="./images/1.jpeg" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Payal" secondary="hello payal " />
          </ListItemButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <ListItemText style={{}} secondary="15:32" />
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <Avatar alt="Pemy Sharp" src="./images/1.jpeg" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Payal" secondary="hello payal " />
          </ListItemButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <ListItemText style={{}} secondary="15:32" />
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <Avatar alt="Pemy Sharp" src="./images/1.jpeg" />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Payal" secondary="hello payal " />
          </ListItemButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <ListItemText style={{}} secondary="15:32" />
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <Avatar alt="Pemy Sharp" src="./images/1.jpeg" />
              </Avatar>
            </ListItemIcon>

            <ListItemText primary="Payal" secondary="hello payal " />
          </ListItemButton>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <ListItemText style={{}} secondary="15:32" />
        </ListItem>
      </List>
    </div>
  );
};

export default Contacts;
