import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "../actions/contact";
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
    default:
      return state;
  }
};
export default Reducer;
