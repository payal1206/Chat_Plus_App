const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const EDIT_CONTACT = "EDIT_CONTACT";
const SET_ALL_CONTACTS="SET_ALL_CONTACTS";
const RECENT_CHAT="RECENT_CHAT"

const Addcontact = (data) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};
const deletecontact = (data) => {
  return {
    type: DELETE_CONTACT,
    payload: data,
  };
};
const editContact = (data) => {
  return {
    type: EDIT_CONTACT,
    payload: data,
  };
};

// const SetAllContacts = (data) => {
//   return {
//     type:SET_ALL_CONTACTS,
//     payload: data,
//   };
// };
// const RecentChats = (data) => {
//   return {
//     type:RECENT_CHAT,
//     payload: data,
//   };
// };

export {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  // SET_ALL_CONTACTS,
  // RECENT_CHAT,
  Addcontact,
  deletecontact,
  editContact,
  // SetAllContacts,
  // RecentChats
};
