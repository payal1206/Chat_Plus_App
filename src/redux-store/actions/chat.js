const SEND = "SEND_CHAT";
const SET_RECEIVER = "SET_RECEIVER_ID";
const SET_ALL_RECENT_CHATS = "SET_ALL_RECENT_CHATS";
const SET_CHATS = "SET_CHATS";
const UPDATE_SENT_STATUS = "UPDATE_SENT_STATUS";

const sendChat = (data) => ({
  type: SEND,
  payload: data,
});

const setReceiverId = (id) => ({
  type: SET_RECEIVER,
  payload: id,
});

const setAllRecentChatsInRedux = (data) => {
  return {
    type: SET_ALL_RECENT_CHATS,
    payload: data,
  };
};
const updateChatSentStatusInRedux = (id) => ({
  type: UPDATE_SENT_STATUS,
  payload: id,
});
const setChatsInRedux = (data) => ({ type: SET_CHATS, payload: data });

export {
  SEND,
  SET_RECEIVER,
  SET_CHATS,
  sendChat,
  setReceiverId,
  SET_ALL_RECENT_CHATS,
  setAllRecentChatsInRedux,
  setChatsInRedux,
  updateChatSentStatusInRedux,
  UPDATE_SENT_STATUS,
};
