import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import classes from "./signup.module.css";
import SignupForm from "./signupform";
import { selectSigninComponent } from "../../redux-store/actions/auth";
import { connect } from "react-redux";
import { adduser } from "../../redux-store/actions/users";
// import { selectSigninComponent } from "../../redux-store/actions/auth";

import { registerUserWithEmail } from "../../firebase/auth";

function Signup(props) {
  const [isError, setError] = React.useState("");
  //sign api request
  const handleUserCreation = async (values) => {
    const { email, password } = values;
    const res = await registerUserWithEmail(email, password);
    if (!res.errorMessage) {
      // props.addUser(values)
      console.log(res);
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
            <SignupForm
              navigateToSignIn={props.SigninComponent}
              createUser={(values) => handleUserCreation(values)}
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  SigninComponent: () => dispatch(selectSigninComponent()),
  addUser: (data) => dispatch(adduser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
