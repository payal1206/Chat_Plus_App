const CONTACTS = "ALLCONTACTS";
const DEVELOPERS = "ALLDEVELOPERS";
const EMAILS = "ALLEMAILS";

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
export {
  CONTACTS,
  DEVELOPERS,
  EMAILS,
  selectContactsComponent,
  selectDeveopersComponent,
  selectEmailsComponent,
};
