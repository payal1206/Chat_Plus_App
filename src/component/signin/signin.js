import React from "react";
import { Grid, Paper } from "@material-ui/core";
import classes from "./signin.module.css";
import SigninForm from "./form1";
import { connect } from "react-redux";
import { selectSignupComponent } from "../../redux-store/actions/display-component";

function Signin(props) {
  console.log("props", props);
  return (
    <Paper className={classes.muiPaper}>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6}>
          <div className={classes.item1}></div>
        </Grid>
        <Grid item lg={6}>
          <div className={classes.item2}>
            <SigninForm SignupComponent={props.SignupComponent} />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  SignupComponent: () => dispatch(selectSignupComponent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
