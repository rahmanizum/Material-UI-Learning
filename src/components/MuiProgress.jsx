import React from "react";
import { Stack, CircularProgress ,LinearProgress} from "@mui/material";
const MuiProgress = () => {
  return <Stack spacing={2}>
    <CircularProgress />
    <CircularProgress  color="success"/>
    <CircularProgress variant="determinate" value={60} color="info" />
    <CircularProgress  color="error"/>

    <LinearProgress/>
    <LinearProgress color="warning"/>
    <LinearProgress variant="determinate" value={60} color="info"/>
  </Stack>;
};

export default MuiProgress;
