import React from "react";
import classes from "./receiver-chat.module.css";
import Avatar from "@mui/material/Avatar";

const ReceiverChat = (props) => {
  return (
    <div className={classes.chatBox}>
      <p className={classes.time}>15:30 </p>
      &nbsp;&nbsp;
      <div className={classes.textBox}>
        <div className={classes.textDiv}>
          <p className={classes.message}>The testing is in proocess</p>
        </div>
      </div>
      <div className={classes.avatar}>
        <Avatar
          alt="Payal"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
    </div>
  );
};

export default ReceiverChat;
