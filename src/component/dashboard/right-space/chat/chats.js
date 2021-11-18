import React from "react";
import ReceiverChat from "./receiver-chat";
import SenderChat from "./sender-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";
import { Divider } from "antd";

//redux
import { connect } from "react-redux";
import { sendChat } from "../../../../redux-store/actions/chat";

const Chats = (props) => {
  const handleChatSubmit = (chat) => {
    const time = new Date();
    const timeStamp = `${time.getHours()}:${time.getMinutes()}`;
    const chatData = {
      senderId: props.userId,
      receiverId: props.receiverId,
      message: chat,
      timeStamp,
    };

    props.submitChat(chatData);
  };

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
        {props.chats.map((chat) =>
          chat.id === props.userId ? (
            <SenderChat key={chat.id}  chat={chat}/>
          ) : (
            <ReceiverChat key={chat.id}   chat={chat} />
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
  receiverId: state.chat_slice.currentReceiverId,
});
const mapDispatchToProps = (dispatch) => ({
  submitChat: (data) => dispatch(sendChat(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
