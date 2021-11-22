import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signin.module.css";
import SigninForm from "./signInForm";
import { connect } from "react-redux";
import {
  selectSignupComponent,
  loginUser,
} from "../../redux-store/actions/auth";

function Signin(props) {
  const handleUserValidation = (data) => {
    const validUser = props.users.filter(
      (user) => user.username === data.username
    );
    console.log(validUser)
    if (validUser.length !== 0) {
      if (data.password === validUser[0]) {
        setTimeout(
          props.handleUserLogin({
            id: validUser[0].id,
            username: validUser[0].username,
          }),
          10000
        );
      } else {
        window.alert("Your password must be at least 6 characters");
      }
    } else {
      window.alert("invalid username");
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
            <SigninForm
              showSignUpModal={props.SignupComponent}
              validateUser={(values) => handleUserValidation(values)}
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
