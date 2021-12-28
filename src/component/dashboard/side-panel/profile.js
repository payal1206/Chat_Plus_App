import React from "react";
import Avatar from "@mui/material/Avatar";
import { connect } from "react-redux";
import { UserProfileToFirestore } from "../../../firebase/database";
import { useEffect, useState } from "react";

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

const Profile = (props) => {
  const [state, setstate] = useState({});

  const getUserInfo = async () => {
    const res = await UserProfileToFirestore(props.userid);
    setstate(res);
  };
  useEffect(() => getUserInfo(), []);
  return (
    <>
      <div style={styles.avartar}>
        <div style={styles.circle}>
          <Avatar alt="Remy Sharp" src="" sx={{ width: 100, height: 100 }} />
        </div>
      </div>
      <div style={styles.text}>
        <p
          style={{
            color: "white",
            fontSize: "23px",
            marginBottom: "0px",
          }}
        >
        {/* console.log(state.username); */}
          {state?.username}
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: "lighter",
          }}
        >
          {state?.email}
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userid: state.auth_slice.user.id,
});

export default connect(mapStateToProps)(Profile);
