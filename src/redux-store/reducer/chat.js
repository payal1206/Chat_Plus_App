import { SEND, SET_RECEIVER } from "../actions/chat";

const initialState = {
  chats: [],
  currentReceiverId: "",
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SEND:
      return { ...state, chats: [...state.chats, action.payload] };
    case SET_RECEIVER:
      return { ...state, currentReceiverId: action.payload };
    default:
      return state;
  }
}
