import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
  return (
    <>
      <Stack
        sx={{ color: "grey.600" }}
        spacing={5}
        direction="row"
        padding="200px"
        display="flex"
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
      {/* <p
        style={{
          paddingBottom: "200px",
        }}
      >
        <b>Fetching Results</b>
      </p> */}
    </>
  );
}
