import React from "react";
import { Box, Stack ,Divider } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack
      sx={{
        border: "1px solid",
      }}
      direction="row"
      spacing={2}
      divider = {<Divider orientation="vertical" flexItem/>}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "150px",
          width: "150px",
          "&:hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        Mufil Rahman A
      </Box>
      <Box
        display="flex"
        height="150px"
        width="150px"
        bgcolor="error.light"
      ></Box>
    </Stack>
  );
};

export default MuiLayout;
