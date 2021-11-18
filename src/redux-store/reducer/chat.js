import { SEND, SET_RECEIVER } from "../actions/chat";

const initialState = {
  chats: {},
  currentReceiver: {
    id: "",
    fullname: "",
  },
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

      return { ...state, chats: newChats };
    }

    case SET_RECEIVER:
      return { ...state, currentReceiverId: action.payload };
    default:
      return state;
  }
}
