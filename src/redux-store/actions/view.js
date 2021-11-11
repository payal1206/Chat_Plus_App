const CONTACTS = "ALLCONTACTS";
const DEVELOPERS = "ALLDEVELOPERS";
const EMAILS = "ALLEMAILS";
const CHATS = "ALLCHATS";
const RESET = "RESET_VIEW_STATE";

const CHATHISTORY = "CHAT_HISTORY";
const EMAILHISTORY = "EMAIL_HISTORY";

//action creators

const selectChatHistory = (data) => {
  return {
    type: CHATHISTORY,
    payload: data,
  };
};
const selectEmailHistory = (data) => {
  return {
    type: EMAILHISTORY,
    payload: data,
  };
};

const resetViewState = () => ({
  type: RESET,
});
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
  CHATHISTORY,
  EMAILHISTORY,
  RESET,
  resetViewState,
  selectContactsComponent,
  selectDeveopersComponent,
  selectEmailsComponent,
  selectChatsComponent,
  selectChatHistory,
  selectEmailHistory,
};
