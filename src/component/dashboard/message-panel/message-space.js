import React from "react";
import Divider from "@mui/material/Divider";

import Chats from "./chat/chats";
const MessageSpace = (props) => {
  return (
    <>
      <div style={{ height: "540px", width: "100%" }}>
        <Chats />
      </div>
      <Divider />
    </>
  );
};

export default MessageSpace;
