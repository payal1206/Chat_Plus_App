import * as React from "react";

import Button from "@mui/material/Button";
import CustomFormControl from "./input-item";

export default function SigninForm(props) {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.validateUser(values);
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          margin: "0px 5%",
        }}
      >
        <h3 style={{ color: "#508ee5" }}>CHAT+</h3>
        <Button onClick={props.showSignUpModal} variant="outlined">
          Signup
        </Button>
      </div>

      <div
        style={{
          height: "730px",
          width: "100%",
        }}
      >
        <h1 style={{ color: "rgb(7, 36, 63)" }}>SIGNIN</h1>
        <div
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            alignContent: "space-between",
          }}
        >
          {/* <FormControl sx={{ width: "40ch" }} variant="standard">
            <InputLabel>username</InputLabel> */}
          <CustomFormControl
            name="username"
            label="Username"
            type="text"
            value={values.username}
            onChange={handleChange("username")}
          />
          {/* </FormControl>
          <FormControl sx={{ width: "40ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel> */}
          {/* <CustomFormControl
             adorn
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}
          <CustomFormControl
            adorn
            name="password"
            label="Password"
            onChange={handleChange("password")}
            value={values.password}
          />
          <Button
            style={{
              height: "45px",
              width: "150px",
            }}
            onClick={handleSubmit}
            variant="contained"
          >
            Signin
          </Button>
        </div>
      </div>
    </div>
  );
}
