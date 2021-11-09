const CONTACTS = "ALLCONTACTS";
const DEVELOPERS = "ALLDEVELOPERS";
const EMAILS = "ALLEMAILS";
const CHATS = "ALLCHATS";

//action creators

const selectEmailsComponent = () => {
  return {
    type: EMAILS,
  };
};
const selectDeveopersComponent = () => {
  return {
    type: DEVELOPERS,
  };
};
const selectContactsComponent = () => {
  return {
    type: CONTACTS,
  };
};
const selectChatsComponent = () => {
  return {
    type: CHATS,
  };
};
export {
  CONTACTS,
  DEVELOPERS,
  EMAILS,
  CHATS,
  selectContactsComponent,
  selectDeveopersComponent,
  selectEmailsComponent,
  selectChatsComponent,
};
