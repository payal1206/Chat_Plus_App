import { CONTACTS, DEVELOPERS, EMAILS ,CHATS} from "../actions/view";

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
    case CHATS:
      return {
        showContactsComponent: false,
        showEmailsComponent: false,
        showDevelopersComponent: false,
        showChatsComponent: true,
      };
    case DEVELOPERS:
      return {
        showContactsComponent: true,
        showEmailsComponent: false,
        showDevelopersComponent: true,
        showChatsComponent: false,
      };
    case EMAILS:
      return {
        showContactsComponent: false,
        showEmailsComponent: true,
        showDevelopersComponent: false,
        showChatsComponent: false,
      };

    default:
      return state;
  }
}
export default viewReducer;
