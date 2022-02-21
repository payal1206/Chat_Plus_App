import React from "react";
import receiverClasses from "./receiver-chat.module.css";
import senderClasses from "./sender-chat.module.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const SingleChat = (props) => {
  const { chat, senderUI } = props;
  const time = getTime(chat.createdAt?.seconds, chat.createdAt?.nanoseconds);
  const classes = senderUI ? senderClasses : receiverClasses;

  const senderView = (
    <>
      <div className={classes.time}>
        {chat.sent ? time : <AccessTimeIcon />}{" "}
      </div>
      <div className={classes.textBox}>
        <div className={classes.textDiv}>
          <p className={classes.message}>{chat.message} </p>
        </div>
      </div>
      <div className={classes.avatar}>
        <Avatar
          alt="hello"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
    </>
  );

  const receiverView = (
    <>
      <div className={classes.avatar}>
        <Avatar
          alt="Payal"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className={classes.textBox}>
        <div className={classes.textDiv}>
          <p className={classes.message}>{chat.message} </p>
        </div>
      </div>
      <div className={classes.time}>
        {chat.sent ? time : <AccessTimeIcon />}{" "}
      </div>
    </>
  );
  return (
    <div className={classes.chatBox}>
      {senderUI ? senderView : receiverView}
    </div>
  );
};

export default SingleChat;

function getTime(mins, nanos) {
  const totalMillis = nanos / 1000000 + mins * 1000;
  const theDate = new Date(totalMillis);
  const time = `${theDate.getHours()}:${theDate.getMinutes()}`;
  return time;
}
