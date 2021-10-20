import React from "react";
import ReceiverChat from "./receiver-chat";
import SenderChat from "./sender-chat";

const Chats = (props) => {
  return (
    <div style={{ height: "500px", width: "90%", margin: "20px 5%" }}>
      <SenderChat />
      <ReceiverChat />
    </div>
  );
};

export default Chats;
