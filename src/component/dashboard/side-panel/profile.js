import React from "react";
import Avatar from "@mui/material/Avatar";

const styles = {
  avartar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    width: "100%",
    height: "150px",
    marginTop: "30px",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120px",
    width: "120px",
    borderRadius: "50%",
    border: "1px solid rgb(161, 174, 187)",
  },
  text: {},
};
const Profile = () => {
  return (
    <>
      <div style={styles.avartar}>
        <div style={styles.circle}>
          <Avatar alt="Remy Sharp" src="" sx={{ width: 100, height: 100 }} />
        </div>
      </div>
      <div style={styles.text}>
        {/* <ListItemText primary="Payal Jain" secondary="payal@jain.com" /> */}
        <p
          style={{
            color: "white",
            fontSize: "23px",
            marginBottom: "0px",
          }}
        >
          Payal Jain
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
          }}
        >
          payal@jain.com
        </p>
      </div>
    </>
  );
};

export default Profile;
