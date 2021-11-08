import React from "react";
import List from "@mui/material/List";
import Contactadd from "./contactadd";
import Contact from "./contact";

const Contacts = () => {
  return (
    <div>
      <List>
        <Contactadd />
        <br></br>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </List>
    </div>
  );
};

export default Contacts;
