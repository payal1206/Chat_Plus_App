import { ALLCONTACTS, ALLDEVELOPERS, ALLEMAILS } from "../actions/view";

const initialState = {
  selectAllContactsComponent: false,
  selectAllEmailsComponent: false,
  selectAllDevelopersComponent: false,
};

function viewReducer(state = initialState, action) {
  switch (action.type) {
    case ALLCONTACTS: {
      return {
        selectAllContactsComponent: true,
      };
    }
    case ALLEMAILS: {
      return { selectAllEmailsComponent: true };
    }
    case ALLDEVELOPERS: {
      return { selectAllDevelopersComponent: true };
    }
    default:
      return state;
  }
}
export default viewReducer;
