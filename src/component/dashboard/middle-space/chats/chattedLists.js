import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";

const chats = [
  { time: "12", message: "come here", name: "Ann" },
  { time: "12", message: "come here", name: "Ann" },
  { time: "12", message: "come here", name: "Ann" },
  { time: "12", message: "come here", name: "Ann" },
];
const ChattedLists = () => {
  return (
    <div>
      <List>
        {chats.map((chat, idx) => (
          <ChattedList key={idx} />
        ))}
      </List>
    </div>
  );
};

export default ChattedLists;
