import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signup.module.css";
import SignupForm from "./signupform";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { selectSigninComponent } from "../../redux-store/actions/auth";
import { connect } from "react-redux";
import { adduser } from "../../redux-store/actions/users";

function Signup(props) {
  return (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6}>
          <div className={classes.item1}></div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.item2}>
            <SignupForm
              showSigninComponent={props.SigninComponent}
              createUser={(values) => props.addUser(values)}
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
