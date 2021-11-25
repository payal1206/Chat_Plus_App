import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Menu, Dropdown, Modal } from "antd";
import EditContactForm from "./edit-contact-form";

const ContactListItem = (props) => {
  const { details, handleDelete, showChatUI } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item onClick={() => setIsModalVisible(true)}>Edit</Menu.Item>
      <Menu.Item onClick={handleDelete}>Delete</Menu.Item>
    </Menu>
  );

  return (
    <>
      <ListItem divider bottom disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Avatar>
              <Avatar alt="Pemy Sharp" src="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary={details.name}
            secondary={details.email}
            onClick={showChatUI}
          />
          <Dropdown
            trigger={["click"]}
            overlay={menu}
            placement="bottomLeft"
            arrow
          >
            <MoreVertOutlinedIcon style={{ color: "gray" }} />
          </Dropdown>
        </ListItemButton>
      </ListItem>

      <Modal
        title="EDIT CONTACT"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <EditContactForm
          values={details}
          submitValues={(data) => props.editValues(data)}
          closeModal={() => setIsModalVisible(false)}
        />
      </Modal>
    </>
  );
};

export default ContactListItem;
