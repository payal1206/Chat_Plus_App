const ADDUSER = "ADDUSER";
const DELETEUSER = "DELETEUSER";
const UPDATEUSER = "UPDATEUSER";

const adduser = (data) => {
  return {
    type: ADDUSER,
    payload: data,
  };
};

const deleteuser = (data) => {
  return {
    type: DELETEUSER,
    payload: data,
  };
};

const updateuser = (data) => {
  return {
    type: UPDATEUSER,
    payload: data,
  };
};

export { ADDUSER, adduser, DELETEUSER, deleteuser, UPDATEUSER, updateuser };
