import React, { useEffect } from "react";
import ReceiverChat from "./sender-chat";
import SenderChat from "./receiver-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";
import generateLinkId from "../../../../helper_modules/generateLink";
import { Divider } from "antd";
import "./scroll.css";

//redux
import { connect } from "react-redux";
import {
  sendChat,
  setChatsInRedux,
  updateChatSentStatusInRedux,
} from "../../../../redux-store/actions/chat";
import { addChatToFirestore } from "../../../../firebase/database";
import { getChatsFromFirestore } from "../../../../firebase/database";

const Chats = (props) => {
  const sendChatsToRedux = async () => {
    const chats = await getChatsFromFirestore(props.user.id, props.receiver.id);
    console.log("chats from firebase", chats);
    if (chats.length > 0) {
      props.setTheChats(chats);
    }
  };
  useEffect(() => sendChatsToRedux(), [props.receiver.id]);

  const handleChatSubmit = async (chat) => {
    //add here
    console.log("current receiver", props.receiver);
    const chatData = {
      senderId: props.user.phone,
      receiverId: props.receiver.id, //this is phone number
      linkId: generateLinkId(props.user.phone, props.receiver.id),
      message: chat,
      sent: false,
    };
    props.submitChat({ ...chatData, id: "temp_id" });
    const res = await addChatToFirestore(chatData);
    if (res.err) {
      window.alert(res.err);
      return;
    }
    const dateString = res.createdAt.toDate().toString();
    props.updateChatSentStatus(res);
  };

  return (
    <>
      <SpaceHead fullname={props.receiver?.fullname} />
      <div
        className="scrollbar" //add scrollbar here
        style={{
          height: "600px",
          width: "90%",
          margin: "20px 5%",
        }}
      >
        {props.chats[props.receiver.id]?.map((chat) =>
          chat.id === props.userId ? (
            <SenderChat key={chat.id} chat={chat} />
          ) : (
            <ReceiverChat key={chat.id} chat={chat} />
          )
        )}
      </div>
      <Divider style={{ marginBottom: "0px" }} />
      <div
        style={{
          background: "whitesmoke",
          height: "100px",
          padding: " 15px 0px",
        }}
      >
        <ChatInput chatInput={(chat) => handleChatSubmit(chat)} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth_slice.user,
  chats: state.chat_slice.chats,
  receiver: state.chat_slice.currentReceiver,
});
const mapDispatchToProps = (dispatch) => ({
  submitChat: (data) => dispatch(sendChat(data)),
  setTheChats: (data) => dispatch(setChatsInRedux(data)),
  updateChatSentStatus: (data) => dispatch(updateChatSentStatusInRedux(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
