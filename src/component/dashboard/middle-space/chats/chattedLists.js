import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";
import { connect } from "react-redux";
import {
  selectChatHistory,
  selectChatsComponent,
} from "../../../../redux-store/actions/view";
import { setReceiverId } from "../../../../redux-store/actions/chat";
import { height } from "@mui/system";

const ChattedLists = (props) => {
  function truncateString(str, num) {
    if (str.length > num) {
      console.log(str);
      return str.slice(0, num) + "..........";
    } else {
      return str;
    }
  }
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
        {props.recentChat != undefined &&
          props.recentChat.map((chat, idx) => {
            const str = truncateString(chat, 5);
            return (
              <ChattedList
                key={idx}
                details={str}
                showTheChatComponent={() => handleChatViews(chat)}
              />
            );
          })}
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
