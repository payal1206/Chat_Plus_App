import React from "react";
import Avatar from "@mui/material/Avatar";
import hello from "../default/image/avatar/hello.jpeg";

const styles = {
  avartar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "100%",
    height: "150px",
    marginTop: "150px",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "140px",
    width: "140px",
    borderRadius: "50%",
    border: "2px solid rgb(161, 174, 187)",
  },
  text: {},
};
const DefaultPage = () => {
  return (
    <>
      <div style={styles.avartar}>
        <div style={styles.circle}>
          <Avatar alt="Rejj" src={hello} sx={{ width: 120, height: 120 }} />
        </div>
      </div>
      <div style={styles.text}>
        <p
          style={{
            fontSize: "50px",
            fontWeight: "lighter",
          }}
        >
          Keep your phone connected
        </p>
      </div>
    </>
  );
};

export default DefaultPage;
