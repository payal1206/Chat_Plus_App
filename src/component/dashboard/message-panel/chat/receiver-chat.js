import React from "react";
import classes from "./chat.module.css";
import Avatar from "@mui/material/Avatar";

const receiverChat = (props) => {
  return (
    <div className={classes.chatBox}>
      <p className={classes.time}>15:30</p>
      <div className={classes.containertext}>
        <div className={classes.text}>hell</div>
      </div>
      <div className={classes.avatar}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
    </div>
  );
};

export default receiverChat;
