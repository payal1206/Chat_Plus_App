import { CHATHISTORY, EMAILHISTORY, RESET } from "../actions/view";

const initialState = {
  showChatUI: false,
  showEmailUI: false,
  showDefaultUI: true,
};

const chatEmailUI = (state = initialState, action) => {
  switch (action.type) {
    case CHATHISTORY:
      return {
        showChatUI: true,
        showEmailUI: false,
        showDefaultUI: false,
      };
    case EMAILHISTORY:
      return {
        showChatUI: false,
        showEmailUI: true,
        showDefaultUI: false,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default chatEmailUI;
