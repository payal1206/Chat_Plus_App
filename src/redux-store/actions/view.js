const ALLCONTACTS = "ALLCONTACTS";
const ALLDEVELOPERS = "ALLDEVELOPERS";
const ALLEMAILS = "ALLEMAILS";

//action creators

const selectAllEmailsComponent = () => {
  return {
    type: ALLEMAILS,
  };
};
const selectAllDeveopersComponent = () => {
  return {
    type: ALLDEVELOPERS,
  };
};
const selectAllContactsComponent = () => {
  return {
    type: ALLCONTACTS,
  };
};
export {
  ALLCONTACTS,
  ALLDEVELOPERS,
  ALLEMAILS,
  selectAllContactsComponent,
  selectAllDeveopersComponent,
  selectAllEmailsComponent,
};
