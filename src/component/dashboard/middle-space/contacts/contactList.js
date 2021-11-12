import React from "react";

import ContactListItem from "./contactListItem";

import { connect } from "react-redux";
import {
  editContact,
  deletecontact,
} from "../../../../redux-store/actions/contact";
import {
  selectChatHistory,
  selectChatsComponent,
} from "../../../../redux-store/actions/view";

import { setReceiverId } from "../../../../redux-store/actions/chat";

const ContactList = (props) => {
  const contactList = props.contacts.filter(
    ({ user_id }) => user_id === props.userId
  );

  const handleChatViews = (contactId) => {
    props.showTheChatComponent();
    props.showTheChatUI();
    props.setTheReceiverId(contactId);
  };

  return contactList.map((contact) => (
    <ContactListItem
      key={contact.id}
      details={contact}
      editValues={(data) => props.submitEditValues(data)}
      handleDelete={() => props.handleDelete(contact.id)}
      showChatUI={() => handleChatViews(contact.id)}
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
  showTheChatUI: () => dispatch(selectChatHistory()),
  showTheChatComponent: () => dispatch(selectChatsComponent()),
  setTheReceiverId: (id) => dispatch(setReceiverId(id)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
