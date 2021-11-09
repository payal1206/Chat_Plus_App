import React from "react";
import List from "@mui/material/List";
import ChattedList from "./chattedList";

const ChattedLists = () => {
  return (
    <div>
      <List>
        <br></br>
        
        <ChattedList />
        <ChattedList />
        <ChattedList />
        <ChattedList />
        <ChattedList />
      </List>
    </div>
  );
};

export default ChattedLists;
