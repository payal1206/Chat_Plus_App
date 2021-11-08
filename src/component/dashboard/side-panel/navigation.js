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

//redux
import { connect } from "react-redux";
import { selectContactsComponent } from "../../../redux-store/actions/view";

const bkcol = "rgb(161, 174, 187)";

const Navigation = (props) => {
  return (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon style={{ color: bkcol }} />
            </ListItemIcon>
            <ListItemText primary="Mails" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon style={{ color: bkcol }} />
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon style={{ color: bkcol }} />
            </ListItemIcon>
            <ListItemText
              primary="Contacts"
              onClick={props.showContactsComponent}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GroupWorkIcon style={{ color: bkcol }} />
            </ListItemIcon>
            <ListItemText primary="Developers" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: bkcol }} />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              onClick={props.showLogoutComponent}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showContactsComponent: () => dispatch(selectContactsComponent()),
});
export default connect(null, mapDispatchToProps)(Navigation);
