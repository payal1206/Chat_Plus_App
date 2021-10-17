import React from "react";
import classes from "./chat.module.css";

const Chats = (props) => {
  return (
    <div className={classes.chatBox}>
      <div className={classes.avatar}>img</div>
      <div className={classes.textBox}>hello this is a test</div>
      <p className={classes.time}>15:30</p>
    </div>
  );
};

export default Chats;
