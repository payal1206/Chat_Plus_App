import React from "react";
import classes from "./receiver-chat.module.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SenderChat = (props) => {
  const { chat } = props;
  // console.log("chat", chat);
  // const time = chat.createdAt.toDate();
  // const timeStamp = `${time.getHours()}:${time.getMinutes()}`;

  return (
    <>
      <div className={classes.chatBox}>
        <div className={classes.time}>
          {chat.sent ? chat.timeStamp : <AccessTimeIcon />}{" "}
        </div>
        &nbsp;&nbsp;
        <div className={classes.textBox}>
          <div className={classes.textDiv}>
            <p className={classes.message}>{chat.message} </p>
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
    </>
  );
};

export default SenderChat;
