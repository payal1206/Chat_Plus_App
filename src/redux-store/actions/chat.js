const SEND = "SEND_CHAT";
const SET_RECEIVER = "SET_RECEIVER_ID";

const sendChat = (data) => ({
  type: SEND,
  payload: data,
});

const setReceiverId = (id) => ({
  type: SET_RECEIVER,
  payload: id,
});

export { SEND, SET_RECEIVER, sendChat, setReceiverId };
