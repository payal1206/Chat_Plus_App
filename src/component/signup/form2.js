import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function SignupForm(props) {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    email: "",
    phone: "",
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
        <Button onClick={() => props.SigninComponent({})} variant="outlined">
          Signin
        </Button>
      </div>

      <div
        style={{
          height: "730px",
          width: "100%",
        }}
      >
        <h1 style={{ color: "rgb(7, 36, 63)" }}>SIGNUP</h1>
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
          <FormControl sx={{ width: "40ch" }} variant="standard">
            <InputLabel>username</InputLabel>
            <Input type="text" value={values.username} />
          </FormControl>
          <FormControl sx={{ width: "40ch" }} variant="standard">
            <InputLabel>email</InputLabel>
            <Input value={values.email} />
          </FormControl>
          <FormControl sx={{ width: "40ch" }} variant="standard">
            <InputLabel>Phone</InputLabel>
            <Input type="text" value={values.phone} />
          </FormControl>
          <FormControl sx={{ width: "40ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
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
          </FormControl>
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Picture</Button>
          </Upload>

          <Button
            style={{
              marginTop: "0px",
              height: "45px",
              width: "150px",
            }}
            variant="contained"
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
