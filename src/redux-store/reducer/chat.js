import { SEND, SET_RECEIVER } from "../actions/chat";

const initialState = {
  chats: {},
  currentReceiver: {
    id: "",
    fullname: "",
  },
  recentChats: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SEND: {
      const { payload } = action;
      const chatSessionId = payload.senderId + payload.receiverId;
      const newChats = {
        ...state.chats,
        [chatSessionId]: state.chats[chatSessionId]
          ? [...state.chats[chatSessionId], payload]
          : [payload],
      };
      // const updatedRecentChats = state.recentChats[payload.receiverId]?(state.recentChats.map((recentchat) =>
      //   recentchat.receiverId === payload.receiverId ? payload : recentchat)): [...state.recentChats,payload]
      const updatedRecentChats = state.recentChats[payload.receiverId]
        ? "exist"
        : payload;
      return {...state, chats: newChats,recentChats:updatedRecentChats};
    }

    case SET_RECEIVER:
      return { ...state, currentReceiver: action.payload };

    default:
      return state;
  }
}
