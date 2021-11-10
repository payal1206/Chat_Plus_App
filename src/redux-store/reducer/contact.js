import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "../actions/contact";
const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload]; // state + payload data
    case DELETE_CONTACT:

    case EDIT_CONTACT:

    default:
      return state;
  }
};
export default Reducer;
