import React from "react";
import ReceiverChat from "./receiver-chat";
import SenderChat from "./sender-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";

const Chats = (props) => {
  return (
    <>
      <SpaceHead />
      <div style={{ height: "500px", width: "90%", margin: "20px 5%" }}>
        <SenderChat />
        <ReceiverChat />
      </div>
      <div>
        <ChatInput />
      </div>
    </>
  );
};

export default Chats;
