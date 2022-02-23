import React, { useEffect } from "react";
import SingleChat from "./single-chat-layout";
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
import { getChatsFromFirestore, listener } from "../../../../firebase/database";

const Chats = (props) => {
  const linkId = generateLinkId(props.user.phone, props.receiverId);

  //listen to ongoing chats and update redux
  const sendProgressChatsToRedux = () => {
    const populateOngoingChatsArray = (chat) => {
      const theChat = { id: chat.id, ...chat.data() };
      const chatExistInRedux =
        props.chats[linkId].find(({ id }) => id === chat.id) !== undefined;
      if (!chatExistInRedux && theChat.senderId !== props.user.phone) {
        props.submitChat(theChat);
      }
    };
    listener(linkId, populateOngoingChatsArray);
  };

  //set all chats on initial render
  const sendChatsToRedux = async () => {
    const chats = await getChatsFromFirestore(linkId);
    if (chats.length > 0) {
      props.setTheChats(chats);
    }
  };

  useEffect(() => sendChatsToRedux(), [linkId, sendChatsToRedux]);
  useEffect(
    () => sendProgressChatsToRedux(),
    [linkId, sendProgressChatsToRedux]
  );
  const handleChatSubmit = async (chat) => {
    //add here
    const chatData = {
      senderId: props.user.phone,
      receiverId: props.receiverId, //this is phone number
      linkId,
      message: chat,
      sent: false,
    };
    props.submitChat({ ...chatData, id: "temp_id" });
    const res = await addChatToFirestore(chatData);
    if (res.err) {
      window.alert(res.err);
      return;
    }
    props.updateChatSentStatus(res);
  };

  //getting receiver's fullname
  const displayName = getDisplayName(props.contacts, props.receiverId);

  return (
    <>
      <SpaceHead fullname={displayName} />
      <div
        className="scrollbar" //add scrollbar here
        style={{
          height: "600px",
          width: "90%",
          margin: "20px 5%",
        }}
      >
        {props.chats[linkId]?.map((chat) =>
          chat.senderId === props.user.phone ? (
            <SingleChat senderUI key={chat.id} chat={chat} />
          ) : (
            <SingleChat key={chat.id} chat={chat} />
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
//function for getting receiver's name or phone
function getDisplayName(contacts, id) {
  const theReceiver = contacts.find(({ phone }) => phone === id);
  const displayName = theReceiver ? theReceiver.name : id;
  return displayName;
}
const mapStateToProps = (state) => ({
  user: state.auth_slice.user,
  chats: state.chat_slice.chats,
  receiverId: state.chat_slice.currentReceiver.id,
  contacts: state.contact_slice,
});
const mapDispatchToProps = (dispatch) => ({
  submitChat: (data) => dispatch(sendChat(data)),
  setTheChats: (data) => dispatch(setChatsInRedux(data)),
  updateChatSentStatus: (data) => dispatch(updateChatSentStatusInRedux(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
