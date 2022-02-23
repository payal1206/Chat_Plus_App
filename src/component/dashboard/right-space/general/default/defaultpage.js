import React from "react";
import Avatar from "@mui/material/Avatar";
import hello from "../default/image/avatar/hello.jpeg";
//components
import DisplayFlexDiv from "../../../../../helper_modules/presentation/flex-div";

const styles = {
  root: {
    height: "inherit",
  },
  avartar: {
    width: "100%",
    color: "white",
    height: "150px",
    // marginTop: "150px",
  },

  circle: {
    height: "140px",
    width: "140px",
    borderRadius: "50%",
    border: "2px solid rgb(161, 174, 187)",
  },
  text: {
    display: "block",
  },
};
const DefaultPage = () => {
  return (
    <DisplayFlexDiv styles={styles.root}>
      <div>
        <DisplayFlexDiv styles={styles.avartar}>
          <DisplayFlexDiv styles={styles.circle}>
            <Avatar alt="Rejj" src={hello} sx={{ width: 120, height: 120 }} />
          </DisplayFlexDiv>
        </DisplayFlexDiv>
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
      </div>
    </DisplayFlexDiv>
  );
};

export default DefaultPage;
