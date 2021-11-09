import React from "react";
import classes from "./sender-chat.module.css";
import Avatar from "@mui/material/Avatar";

const SenderChat = (props) => {
  return (
    <div className={classes.chatBox}>
      <div className={classes.avatar}>
        <Avatar
          alt="Rohit"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className={classes.textBox}>
        <div className={classes.textDiv}>
          <p className={classes.message}>
            crazy man !!!!!
          </p>
        </div>
      </div>
      <p className={classes.time}>15:30</p>
    </div>
  );
};

export default SenderChat;
