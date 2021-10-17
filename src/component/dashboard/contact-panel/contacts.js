import React from "react";
import List from "@mui/material/List";

import Contact from "./contact";

const Contacts = () => {
  return (
    <div>
      <List>
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
