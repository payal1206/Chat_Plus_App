import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import classes from "./signin.module.css";
import SigninForm from "./signInForm";
import { connect } from "react-redux";
import {
  selectSignupComponent,
  loginUser,
} from "../../redux-store/actions/auth";
import { getUserPhoneNumber } from "../../firebase/database";
import { signinUserWithUserEmail } from "../../firebase/auth";

function Signin(props) {
  const [isError, setError] = React.useState("");
  const handleUserLogin = async (values) => {
    const { email, password } = values;
    const res = await signinUserWithUserEmail(email, password);
    if (!res.errorMessage) {
      const { uid, email } = res.user;
      const phone = await getUserPhoneNumber(uid);
      setTimeout(
        props.handleUserLogin({
          id: uid,
          username: email,
          phone,
        }),
        10000
      );
    } else {
      setError(res.errorMessage);
    }
  };
  return (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6}>
          <div className={classes.item1}></div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.item2}>
            {isError && (
              <Typography style={{ color: "red" }}>{isError}</Typography>
            )}

            <SigninForm
              showSignUpModal={props.SignupComponent}
              validateUser={(values) => handleUserLogin(values)}
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  users: state.user_slice.users,
});

const mapDispatchToProps = (dispatch) => ({
  SignupComponent: () => dispatch(selectSignupComponent()),
  handleUserLogin: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
