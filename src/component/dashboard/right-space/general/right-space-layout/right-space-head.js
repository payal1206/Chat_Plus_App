import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import IconOutline from "./icon-outline";

const SpaceHead = (props) => {
  return (
    <div>
      <Grid container style={{ padding: "10px" }}>
        <Grid item lg={6}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Avatar alt="Payal" src="./images/1.jpeg" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.fullname} secondary="Online" />
          </ListItem>
        </Grid>
        <Grid item lg={6} style={{ paddingTop: "10px" }}>
          <div style={{ float: "right" }}>
            <IconOutline icon={<ChatOutlinedIcon />} />
            <IconOutline icon={<EmailOutlinedIcon />} />
            <IconOutline icon={<MoreVertOutlinedIcon />} />
          </div>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "13.5px" }} />
    </div>
  );
};

export default SpaceHead;
