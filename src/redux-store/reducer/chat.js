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
    case SEND:
      return { ...state, chats: [...state.chats, action.payload] };
    case SET_RECEIVER:
      return { ...state, currentReceiver: action.payload };
    default:
      return state;
  }
}
