import {
  SEND_CHAT,
  SET_RECEIVER,
  SET_ALL_RECENT_CHATS,
  SET_CHATS,
  UPDATE_SENT_STATUS,
} from "../actions/chat";

const initialState = {
  chats: {},
  currentReceiver: {
    id: "", //this id is the phone number
    fullname: "",
  },
  recentChats: [],
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CHAT: {
      const { payload } = action;
      const newChats = {
        ...state.chats,
        [payload.linkId]: state.chats[payload.linkId]
          ? chatExists(state.chats[payload.linkId], payload)
            ? state.chats[payload.linkId]
            : [...state.chats[payload.linkId], payload]
          : [payload],
      };
      //get all linkIds from recentChats
      const recentLinkIds = state.recentChats.map(({ linkId }) => linkId);
      //check if incoming linkId exist in recentChats
      const filteredRecentChats = recentLinkIds.includes(payload.linkId)
        ? state.recentChats.filter(
            (recentchat) => recentchat.linkId !== payload.linkId
          ) //if the linkId exist? replace the chat
        : state.recentChats;
      const updatedRecentChats = [payload, ...filteredRecentChats];
      return { ...state, chats: newChats, recentChats: updatedRecentChats };
    }
    case SET_RECEIVER:
      return { ...state, currentReceiver: action.payload };
    case SET_CHATS: {
      const { payload } = action;
      const label = payload[0];
      return {
        ...state,
        chats: { ...state.chats, [label.linkId]: payload },
      };
    }
    case SET_ALL_RECENT_CHATS:
      return {
        ...state,
        recentChats: action.payload,
      };
    case UPDATE_SENT_STATUS:
      const selectedChats = state.chats[action.payload.linkId];
      const updatedSelectedChats = selectedChats.map(
        (chat) => (chat.id === "temp_id" ? action.payload : chat) // using "temp_id" is a temporal solution
      );
      const chatsWithSentStatusUpdated = {
        ...state.chats,
        [action.payload.linkId]: updatedSelectedChats,
      };
      return {
        ...state,
        chats: chatsWithSentStatusUpdated,
      };
    default:
      return state;
  }
}

function chatExists(chats, chat) {
  return chats.find(({ id }) => id === chat.id) !== undefined;
}
