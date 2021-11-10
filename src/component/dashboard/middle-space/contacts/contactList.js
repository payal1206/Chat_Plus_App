import React, { useState } from "react";
import ContactListItem from "./contactListItem";
import { Modal } from "antd";
const ContactList = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ContactListItem showEditModal={() => setIsModalVisible(true)} />
      <ContactListItem showEditModal={() => setIsModalVisible(true)} />
      <ContactListItem showEditModal={() => setIsModalVisible(true)} />
      <ContactListItem showEditModal={() => setIsModalVisible(true)} />
      <Modal
        title="EDIT CONTACT"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        {/* <AddForm /> */}
      </Modal>
    </>
  );
};

export default ContactList;
