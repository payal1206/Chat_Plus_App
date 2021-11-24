import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import CustomFormControl from "./input-item";
import { notification } from "antd";
export default function SignupForm(props) {
  const initialValues = {
    username: "",
    password: "",
    email: "",
    phone: "",
  };

  const [values, setValues] = useState(initialValues);
  const isSignUpClickable = useRef(false);

  const handleSignUpClickable = () => {
    const { email, password, username, phone } = values;
    const emptyFieldExist =
      email === "" || password === "" || username === "" || phone === "";
    isSignUpClickable.current = !emptyFieldExist;
  };

  useEffect(() => handleSignUpClickable, [values]);

  const handleSubmit = () => {
    notification["success"]({
      message: "Success",
      description: "you are successfully signup.",
    });
  

    props.navigateToSignIn();
    props.createUser(values);
    setValues(initialValues);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
        <Button onClick={() => props.navigateToSignIn()} variant="outlined">
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
          <CustomFormControl
            name="username"
            label="Username"
            type="text"
            onChange={handleChange("username")}
            value={values.username}
          />
          <CustomFormControl
            name="email"
            label="Email"
            type="email"
            onChange={handleChange("email")}
            value={values.email}
          />
          <CustomFormControl
            name="phone"
            label="Phone"
            type="number"
            onChange={handleChange("phone")}
            value={values.phone}
          />
          <CustomFormControl
            adorn
            name="password"
            label="Password"
            onChange={handleChange("password")}
            value={values.password}
          />

          <Upload>
            <Button icon={<UploadOutlined />}>Upload Picture</Button>
          </Upload>

          <Button
            style={{
              marginTop: "0px",
              height: "45px",
              width: "150px",
            }}
            onClick={handleSubmit}
            variant="contained"
            disabled={!isSignUpClickable.current}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
