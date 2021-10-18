import React from "react";
import Bottom from "./bottom";

import MessageHead from "./message-head";
import MessageSpace from "./message-space";

function MessagePanel() {
  return (
    <div>
      <MessageHead />
      <MessageSpace />
      <Bottom />
    </div>
  );
}

export default MessagePanel;

