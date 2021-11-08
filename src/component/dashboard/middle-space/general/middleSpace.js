import React from "react";
import classes from "./middleSpace.module.css";

//components
import ChatSpace from "../chats/chatSpace";
import ContactSpace from "../contacts/contactSpace";

//redux
import { connect } from "react-redux";

function MiddleSpace(props) {
  console.log("view_slice", props.component);

  const { showChatsComponent, showContactsComponent, ShowEmailsComponent } =
    props.showComponent;
  return (
    <div className={classes.middlespace}>
      {showChatsComponent && <ChatSpace />}
      {showContactsComponent && <ContactSpace />}
      {/* {showChatsComponent && <EmailSpace />} */}
    </div>
  );
}
const mapStateToProps = (state) => ({
  showComponent: state.view_slice,
});

export default connect(mapStateToProps)(MiddleSpace);
