import { ADDUSER, DELETEUSER, UPDATEUSER } from "../actions/users";
const initialState = {
  users: [],
};
function UserReducer(state = initialState, action) {
  switch (action.type) {
    case ADDUSER:
      return {
        users: [...state.users, action.payload],
      };
    case UPDATEUSER:
      return {
        ...state,
      };
    case DELETEUSER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default UserReducer;
