import React from "react";
function DisplayFlexDiv(props) {
  const { children, styles } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

export default DisplayFlexDiv;
