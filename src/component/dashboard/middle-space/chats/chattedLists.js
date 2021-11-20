import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";
import { connect } from "react-redux";


const ChattedLists = (props) => {
  console.log(props.recentChat);
  return (
    
    <div>
      <List>
        {props.recentChat !=undefined  && props.recentChat.map((chat, idx) => (
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
