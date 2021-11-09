import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import classes from "../../dashboard.module.css";
import AddNewContact from "./contactadd";
import { Modal, Button } from "antd";

import ContactHead from "./contact-head";
import Search from "../general/search";

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
          // onOk={handleOk}
          // onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
}

export default ContactSpace;

{
  /* <ListItem divider bottom disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Avatar>
            <Avatar alt="Pemy Sharp" src={hello} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary="Payal Jain" />
      </ListItemButton>
      <p
        style={{
          float: "right",
          marginRight: "15px",
          fontSize: "15px",
          color: "grey",
        }}
      >
        15:30
      </p>
    </ListItem> */
}
