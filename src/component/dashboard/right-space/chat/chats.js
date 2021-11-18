import React, { useState, useEffect } from "react";
import ReceiverChat from "./receiver-chat";
import SenderChat from "./sender-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";
import { Divider } from "antd";

//redux
import { connect } from "react-redux";
import { sendChat } from "../../../../redux-store/actions/chat";

const Chats = (props) => {
  // const [receiver, setReceiver] = useState({});

  // useEffect(()=>setReceiver(props.re),[])
  const handleChatSubmit = (chat) => {
    const time = new Date();
    const timeStamp = `${time.getHours()}:${time.getMinutes()}`;
    const chatData = {
      senderId: props.userId,
      receiverId: props.receiver.id,
      message: chat,
      timeStamp,
    };
    // console.log("chat", chatData);
    props.submitChat(chatData);
  };

  const chatSessionId = props.userId + props.receiver.id;
  const chatHistory = props.chats[chatSessionId]
    ? props.chats[chatSessionId]
    : [];

  return (
    <>
      <SpaceHead fullname={props.receiver?.fullname} />
      <div
        style={{
          height: "550px",
          width: "90%",
          margin: "20px 5%",
        }}
      >
        {chatHistory.map((chat) =>
          chat.id === props.userId ? (
            <SenderChat key={chat.id} chat={chat} />
          ) : (
            <ReceiverChat key={chat.id} chat={chat} />
          )
        )}
      </div>
      <Divider />
      <div>
        <ChatInput chatInput={(chat) => handleChatSubmit(chat)} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth_slice.user.id,
  chats: state.chat_slice.chats,
  receiver: state.chat_slice.currentReceiver,
});
const mapDispatchToProps = (dispatch) => ({
  submitChat: (data) => dispatch(sendChat(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
