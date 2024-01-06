import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper
      sx={{
        p: "32px",
      }}
      elevation={4}
    >
      <Stack
        sx={{
          border: "1px solid",
        }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
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
      <Grid container my={4} rowSpacing={2} columnSpacing={4}>
        <Grid item xs={3} sm={6} lg={12}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={9} sm={6} lg={12}>
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={9} sm={6} lg={12}>
          <Box bgcolor="warning.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={3} sm={6} lg={12}>
          <Box bgcolor="error.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
