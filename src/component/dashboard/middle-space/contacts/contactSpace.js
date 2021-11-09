import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import classes from "../../dashboard.module.css";
import AddNewContact from "./contactadd";
import { Modal } from "antd";

import ContactHead from "./contact-head";
import Search from "../general/search";
import ContactList from "./contactList";
function ContactSpace() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className={classes.contactPanelDiv}>
      <div className={classes.contactPanelHead}>
        <ContactHead />
      </div>
      <div className={classes.search}>
        <Search />
      </div>
      <Divider />
      <div className={classes.contactList}>
        <AddNewContact
          handleClick={() => {
            setIsModalVisible(true);
          }}
        />
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <ContactList />
      </div>
    </div>
  );
}

export default ContactSpace;
