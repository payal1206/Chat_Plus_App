import React from "react";
import ReceiverChat from "./receiver-chat";
import SenderChat from "./sender-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";
import { Divider } from "antd";

const Chats = (props) => {
  return (
    <>
      <SpaceHead />
      <div
        style={{
          height: "550px",
          width: "90%",
          margin: "20px 5%",
        }}
      >
        <SenderChat />
        <ReceiverChat />
      </div>
      <Divider />
      <div>
        <ChatInput />
      </div>
    </>
  );
};

export default Chats;
