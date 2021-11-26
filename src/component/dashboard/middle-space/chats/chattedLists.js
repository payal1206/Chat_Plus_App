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
    console.log(chat);
    const { receiverId, fullname } = chat;
    props.showTheChatComponent();
    props.showTheChatUI();
    props.setTheReceiver({
      id: receiverId,
      fullname: fullname,
    });
  };
  return (
    <div>
      <List>
        {props.recentChat != undefined &&
          props.recentChat.map((chat, idx) => (
            <ChattedList
              key={idx}
              details={chat}
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
});
const mapDispatchtoProps = (dispatch) => ({
  showTheChatUI: () => dispatch(selectChatHistory()),
  showTheChatComponent: () => dispatch(selectChatsComponent()),
  setTheReceiver: (data) => dispatch(setReceiverId(data)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ChattedLists);
