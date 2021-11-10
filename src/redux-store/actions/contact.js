const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const EDIT_CONTACT = "EDIT_CONTACT";

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
const editcontact = (data) => {
  return {
    type: EDIT_CONTACT,
    payload: data,
  };
};
export {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  Addcontact,
  deletecontact,
  editcontact,
};