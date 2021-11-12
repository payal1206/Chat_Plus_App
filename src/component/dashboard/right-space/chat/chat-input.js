import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import { List, ListItemText } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  border: "1px solid rgba(203, 206, 206, 0.609)",
  margin: theme.spacing(1),
  marginLeft: "20px",
  width: "100%",
  height: "45px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(),
    width: "97%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ChatInput = (props) => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    const chatText = event.target.value;
    setState(chatText);
  };

  const sendChatText = () => {
    props.chatInput(state);
  };

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid grey",
                  borderRadius: "50%",
                }}
              >
                <AddIcon />
              </div>
            </ListItemIcon>
            <ListItemText>
              <Search>
                <StyledInputBase
                  value={state}
                  onChange={handleChange}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </ListItemText>
            <SendIcon
              onClick={sendChatText}
              fontSize="large"
              style={{ color: "green" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default ChatInput;
