import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function Form2() {
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
    <div>
      <div
        style={{
          marginTop: "6px",
          marginRight: "7px",
          float: " right",
        }}
      >
        <Button variant="outlined">Signin</Button>
      </div>

      <form>
        <div
          style={{
            align: "middle",
            justify: "center",
            padding: "80px",
            color: "black",
          }}
        >
          <h1>CHAT+ SIGNUP</h1>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel>username</InputLabel>
            <Input type="text" value={values.username} />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel>email</InputLabel>
            <Input value={values.email} />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel>Phone</InputLabel>
            <Input type="text" value={values.phone} />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
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
          <br></br>
          <Button variant="contained">Signup</Button>
        </div>
      </form>
    </div>
  );
}