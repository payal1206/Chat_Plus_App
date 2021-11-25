import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT ,SET_CONTACT} from "../actions/contact";
const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload]; // state + payload data
    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);
      case SET_CONTACT:
        return [...state]
      default:
      return state;
  }
};
export default Reducer;
