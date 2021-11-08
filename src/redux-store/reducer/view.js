import { CONTACTS, DEVELOPERS, EMAILS } from "../actions/view";

const initialState = {
  showContactsComponent: false,
  showEmailsComponent: false,
  showDevelopersComponent: false,
  showChatsComponent: true,
};

function viewReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACTS:
      return {
        showContactsComponent: true,
        showEmailsComponent: false,
        showDevelopersComponent: false,
        showChatsComponent: false,
      };
    default:
      return state;
  }
}
export default viewReducer;
