import React from "react";
import classes from "./receiver-chat.module.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SenderChat = (props) => {
  const { chat } = props;
  const time = getTime(chat.createdAt?.seconds, chat.createdAt?.nanoseconds);

  return (
    <>
      <div className={classes.chatBox}>
        <div className={classes.time}>
          {chat.sent ? time : <AccessTimeIcon />}{" "}
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

function getTime(mins, nanos) {
  const totalMillis = nanos / 1000000 + mins * 1000;
  const theDate = new Date(totalMillis);
  const time = `${theDate.getHours()}:${theDate.getMinutes()}`;
  return time;
}
