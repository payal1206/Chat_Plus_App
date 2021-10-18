import React from "react";

const styles = {
  root: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "40%",
    border: "1px solid grey",
    margin: "0px 10px",
    color: "grey",
  },
};

const IconOutline = (props) => {
  return <div style={styles.root}>{props.icon}</div>;
};

export default IconOutline;

