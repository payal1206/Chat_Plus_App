import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";
import "./input.css";
const ChatInput = (props) => {
  const [state, setstate] = useState("");

  const handleChange = (event) => {
    const newState = event.target.value;
    setstate(newState);
  };

  const handleChatSubmit = () => {
    if (state === "") return;
    props.chatInput(state);
    setstate("");
  };

  return (
    <div
      style={{
        height: "70px",
        margin: "0px 2%",
        width: "95%",
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <AttachFileIcon
            style={{ marginTop: "10px", height: "30px", width: "35px" }}
          />
        </Grid>
        <Grid item xs={10}>
          <textarea
            className="text-area-input"
            placeholder="Write your message..."
            value={state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}>
          <SendIcon
            color="inherit"
            onClick={handleChatSubmit}
            fontSize="large"
            style={{ marginTop: "7px", color: state !== "" ? "green" : "" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatInput;
