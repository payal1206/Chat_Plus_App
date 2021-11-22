import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import classes from "../../dashboard.module.css";
import AddNewContact from "./contactadd";
import { Modal } from "antd";
import AddForm from "./addform";
import ContactHead from "./contact-head";
import Search from "../general/search";
import ContactList from "./contactList";
import { notification } from "antd";
function ContactSpace() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onContactAdd = () => {
    setIsModalVisible(false);
    notification["success"]({
      message: "Success",
      description: "Contact was added successfully.",
    });
  };

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
          title="ADD CONTACT"
          visible={isModalVisible}
          footer={null}
          onCancel={() => setIsModalVisible(false)}
        >
          <AddForm closeForm={onContactAdd} />
        </Modal>
        <ContactList />
      </div>
    </div>
  );
}

export default ContactSpace;
