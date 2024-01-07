import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading">
        Fetch Data
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
        loadingIndicator="Loading"
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
        loading
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
