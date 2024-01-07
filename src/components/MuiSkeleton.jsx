import React, { useEffect, useState } from "react";
import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material";

const MuiSkeleton = () => {
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => SetLoading(false), 4000);
  }, []);
  return (
    <Box sx={{ width: "250px" }}>
      {loading && (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      )}
      {!loading && (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skelton"
          width={256}
          height="144px"
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading && (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        )}
        {!loading && <Avatar sx={{ bgcolor: "primary.light" }}>V</Avatar>}
        <Stack sx={{ width: "80%" }}>
        {loading && (
          <Typography variant="body1">
            <Skeleton varient="text" width="100%" animation="wave" />
          </Typography>
        )}
        {loading && (
          <Typography variant="body2">
            <Skeleton varient="text" width="100%" animation="wave" />
          </Typography>
        )}
        {!loading && (
          <Typography variant="body1">React MUI Tutorial</Typography>
        )}
      </Stack>
      </Stack>

      <Stack sx={{marginTop:'12px'}} spacing={2}>
        <Skeleton variant='text' />
        <Skeleton variant="circular" width={40} height={40}/>
        <Skeleton variant='rectangular' width={256} height={125}/>
        <Skeleton variant='text' animation="wave"/>
        <Skeleton variant="circular" width={40} height={40} animation="wave"/>
        <Skeleton variant='rectangular' width={256} height={125} animation="wave"/>
      </Stack>

    </Box>
  );
};

export default MuiSkeleton;
