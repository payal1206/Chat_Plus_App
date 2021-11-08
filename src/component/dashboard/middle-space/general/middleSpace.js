import React from "react";
import ChatSpace from "../chats/chatSpace";
import classes from "./middleSpace.module.css";

function MiddleSpace(props) {
  return (
    <div className={classes.middlespace}>
      <ChatSpace />
      {/* <ContactSpace/> */}
    </div>
  );
}

export default MiddleSpace;
