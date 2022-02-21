import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";
import { connect } from "react-redux";
import {
  selectChatHistory,
  selectChatsComponent,
} from "../../../../redux-store/actions/view";
import { setReceiverId } from "../../../../redux-store/actions/chat";

const ChattedLists = (props) => {
  const handleChatViews = (chat) => {
    const { senderId, receiverId } = chat;
    const theReceiverId = senderId === props.user.phone ? receiverId : senderId;
    props.showTheChatComponent();
    props.showTheChatUI();
    props.setTheReceiver({ id: theReceiverId });
  };

  console.log("parent::contacts", props.contacts);
  return (
    <div
      style={{
        textoverflow: "ellipsis",
        overflow: "hidden",
        marginBottom: "24px",
        whiteSpace: "...",
        width: "325px",
      }}
    >
      <List>
        {props.recentChat !== undefined &&
          props.recentChat.map((chat, idx) => (
            <ChattedList
              user={props.user}
              key={idx}
              details={chat}
              contacts={props.contacts}
              showTheChatComponent={() => handleChatViews(chat)}
            />
          ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recentChat: state.chat_slice.recentChats,
  contacts: state.contact_slice,
  user: state.auth_slice.user,
});
const mapDispatchtoProps = (dispatch) => ({
  showTheChatUI: () => dispatch(selectChatHistory()),
  showTheChatComponent: () => dispatch(selectChatsComponent()),
  setTheReceiver: (data) => dispatch(setReceiverId(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ChattedLists);
