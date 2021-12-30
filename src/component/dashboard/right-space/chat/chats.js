import React, { useEffect } from "react";
import ReceiverChat from "./sender-chat";
import SenderChat from "./receiver-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";
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
    const chats = await getChatsFromFirestore(props.userId, props.receiver.id);
    if (chats.length > 0) {
      props.setTheChats(chats);
    }
  };
  useEffect(() => sendChatsToRedux(), [props.receiver.id]);

  const handleChatSubmit = async (chat) => {
    //add here
    const chatData = {
      senderId: props.userId,
      receiverId: props.receiver.id,
      message: chat,
      fullname: props.receiver.fullname,
      sent: false,
    };
    // props.submitChat({ ...chatData, id: "temp_id" });
    const res = await addChatToFirestore(chatData);
    if (res.err) {
      window.alert(res.err);
      return;
    }
    const dateString = res.createdAt.toDate().toString();
    // const date = dateString.split(" ");
    // const sentDate = {
    //   weekday: date[0],
    //   month: date[1],
    //   day: date[2],
    //   year: date[3],
    //   time: date[4],
    // };
    // console.log("sentDate", sentDate);
    // props.updateChatSentStatus({ ...res, createdAt: sentDate });
  };

  return (
    <>
      <SpaceHead fullname={props.receiver?.fullname} />
      <div
        className="scrollbar" //add scrollbar here
        style={{
          height: "550px",
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
  setTheChats: (data) => dispatch(setChatsInRedux(data)),
  updateChatSentStatus: (data) => dispatch(updateChatSentStatusInRedux(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
