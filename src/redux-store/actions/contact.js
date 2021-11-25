const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const EDIT_CONTACT = "EDIT_CONTACT";
const SET_CONTACT="SET_CONTACT";

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

const Setcontact = (data) => {
  return {
    type:SET_CONTACT,
    payload: data,
  };
};


export {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SET_CONTACT,
  Addcontact,
  deletecontact,
  editContact,
  Setcontact
};
