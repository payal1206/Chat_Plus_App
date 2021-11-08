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
        <p>
          <b>Fetching Results</b>
        </p>

        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    </>
  );
}
