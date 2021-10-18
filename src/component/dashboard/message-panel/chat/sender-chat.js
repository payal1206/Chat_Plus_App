import React from "react";
import classes from "./chat.module.css";
import Avatar from "@mui/material/Avatar";

const SenderChat = (props) => {
  return (
    <div className={classes.chatBox}>
      <div className={classes.avatar}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className={classes.textBox}>hello this is a test</div>
      <p className={classes.time}>15:30</p>
    </div>
  );
};

export default SenderChat;
