import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";
import { connect } from "react-redux";
// import {
//   selectChatsComponent,
// } from "../../../../redux-store/actions/view";
import {
  selectChatHistory,
  selectChatsComponent,
} from "../../../../redux-store/actions/view";
import { setReceiverId } from "../../../../redux-store/actions/chat";
const ChattedLists = (props) => {
  // console.log(props.recentChat);

  // const list = props.recentChat.reverse();
  // console.log(list);
  // console.log(props.recentChat.reverse());
  const handleChatViews = (contact) => {
    const { id, name } = contact;
    props.showTheChatComponent();
    props.showTheChatUI();
    props.setTheReceiver({
      id: id,
      fullname: name,
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
              showTheChatComponent={props.showTheChatComponent}
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
