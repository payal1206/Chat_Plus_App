import React from "react";
import Divider from "@mui/material/Divider";

import Chats from "../../chat/chats";
import DefaultPage from "../default/defaultpage";

//redux
import { connect } from "react-redux";

const MessageSpace = (props) => {
  // console.log(props.showIU);

  return (
    <>
      <div style={{ height: "830px", width: "100%" }}>
        {props.showIU.showDefaultUI && <DefaultPage />}
        {props.showIU.showChatUI && <Chats />}
        {/* {props.showIU.showEmailUI && <Emails />} */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  showIU: state.chat_email_ui_slice,
});

export default connect(mapStateToProps)(MessageSpace);
