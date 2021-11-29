import {
  SEND,
  SET_RECEIVER,
  SET_ALL_RECENT_CHATS,
  SET_CHATS,
} from "../actions/chat";

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
      const newChats = {
        ...state.chats,
        [payload.receiverId]: state.chats[payload.receiverId]
          ? [...state.chats[payload.receiverId], payload]
          : [payload],
      };

      const recentReceiverIds = state.recentChats.map(
        ({ receiverId }) => receiverId
      );
      const filteredRecentChats = recentReceiverIds.includes(payload.receiverId)
        ? state.recentChats.filter(
            (recentchat) => recentchat.receiverId != payload.receiverId
          ) //it remove the recentchat if it is false
        : state.recentChats;
      const updatedRecentChats = [payload, ...filteredRecentChats];

      return { ...state, chats: newChats, recentChats: updatedRecentChats };
    }
    case SET_RECEIVER:
      return { ...state, currentReceiver: action.payload };
    case SET_CHATS: {
      const { payload } = action;
      const label = payload[0];
      console.log("label", label);
      return {
        ...state,
        chats: { ...state.chats, [label.receiverId]: payload },
      };
    }
    case SET_ALL_RECENT_CHATS:
      return {
        ...state,
        recentChats: action.payload,
      };
    default:
      return state;
  }
}
