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

      const recentReceiverIds = state.recentChats.map(
        ({ receiverId }) => receiverId
      );
      const filteredRecentChats = recentReceiverIds.includes(payload.receiverId)     
        ? state.recentChats.filter(
            (recentchat) => recentchat.receiverId != payload.receiverId
          )//it remove the recentchat if it is false 
        : state.recentChats;
      const updatedRecentChats = [payload, ...filteredRecentChats];

      return { ...state, chats: newChats, recentChats: updatedRecentChats };
    }

    case SET_RECEIVER:
      return { ...state, currentReceiver: action.payload };

    default:
      return state;
  }
}
