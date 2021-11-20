import React, { useState } from "react";
import { Input, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
const CustomFormControl = (props) => {
  const { name, label, type, onChange, value, adorn } = props;
  const [error, setError] = useState({
    error: false,
    errorMessage: "Field is required",
  });

  //for handling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ width: "40ch" }}
      name={name}
      variant="standard"
      required="true"
      error={error.error}
    >
      <InputLabel>{label}</InputLabel>
      {adorn ? (
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      ) : (
        <Input type={type} onChange={onChange} value={value} />
      )}
      {error.error && <p style={{ color: "red" }}>{error.errorMessage}</p>}
    </FormControl>
  );
};

export default CustomFormControl;

// htmlFor="standard-adornment-password"
