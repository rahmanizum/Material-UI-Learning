import React from "react";
import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          "&:hover": {
            bgcolor: "primary.light",
          },
        }}
      >
        Mufil Rahman A
      </Box>
      <Box
        display="flex"
        height="200px"
        width="200px"
        bgcolor="error.light"
        p={2}
      ></Box>
    </>
  );
};

export default MuiLayout;
