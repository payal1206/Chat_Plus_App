import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";
import { connect } from "react-redux";

const chats = [
  // { time: "12", message: "come here", name: "lawernece" },
  // { time: "13", message: "say what happen", name: "rohit" },
  // { time: "13", message: "i have call you", name: "payal" },
  // { time: "14", message: "i was busy", name: "yashee" },
];

const ChattedLists = (props) => {
  console.log(props.recentChat);
  return (
    <div>
      <List>
        {chats.map((chat, idx) => (
          <ChattedList key={idx} details={chat} />
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recentChat: state.chat_slice.recentChats,
});

export default connect(mapStateToProps)(ChattedLists);
