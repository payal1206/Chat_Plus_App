import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signup.module.css";
import SignupForm from "./form2";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { selectSigninComponent } from "../../redux-store/actions/auth";
import { connect } from "react-redux";

function Signup(props) {
  return (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6}>
          <div className={classes.item1}></div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.item2}>
            <SignupForm showSigninComponent={props.SigninComponent} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  SigninComponent: () => dispatch(selectSigninComponent()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
