import React from "react";

import ContactListItem from "./contactListItem";

import { connect } from "react-redux";
import {
  editContact,
  deletecontact,
} from "../../../../redux-store/actions/contact";

const ContactList = (props) => {
  const contactList = props.contacts.filter(
    ({ user_id }) => user_id === props.userId
  );

  return contactList.map((contact) => (
    <ContactListItem
      key={contact.id}
      details={contact}
      editValues={(data) => props.submitEditValues(data)}
      handleDelete={() => props.handleDelete(contact.id)}
    />
  ));
};
const mapStateToProps = (state) => ({
  userId: state.auth_slice.user.id,
  contacts: state.contact_slice,
});
const mapDispatchtoProps = (dispatch) => ({
  submitEditValues: (data) => dispatch(editContact(data)),
  handleDelete: (id) => dispatch(deletecontact(id)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
