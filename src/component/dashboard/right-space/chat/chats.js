import React, { useEffect } from "react";
import ReceiverChat from "./receiver-chat";
import SenderChat from "./sender-chat";
import ChatInput from "./chat-input";
import SpaceHead from "../general/right-space-layout/right-space-head";
import { Divider } from "antd";

//redux
import { connect } from "react-redux";
import {
  sendChat,
  setChatsInRedux,
} from "../../../../redux-store/actions/chat";
import { addChatToFirestore } from "../../../../firebase/database";
import { getChatsFromFirestore } from "../../../../firebase/database";

const Chats = (props) => {
  const sendChatsToRedux = async () => {
    const chats = await getChatsFromFirestore(props.userId, props.receiver.id);
    console.log("chats from firetore", chats);
    props.setTheChats(chats);
  };
  useEffect(() => sendChatsToRedux(), [props.receiver.id]);
  const handleChatSubmit = async (chat) => {
    const chatData = {
      senderId: props.userId,
      receiverId: props.receiver.id,
      message: chat,
      fullname: props.receiver.fullname,
    };
    const res = await addChatToFirestore(chatData);
    if (res.err) {
      window.alert(res.err);
      return;
    }
    const time = res.createdAt.toDate();
    const timeStamp = `${time.getHours()}:${time.getMinutes()}`;
    props.submitChat({ ...res, timeStamp });
  };

  return (
    <>
      <SpaceHead fullname={props.receiver?.fullname} />
      <div //add scrollbar here
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
