import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


const MuiRating = () => {
  const [value, setValue] = useState(3);
  console.log({ value });
  const handleChange = (e, val) => {
    setValue(val);
  };
  return (
    <Stack spacing={2}>
      <Stack>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
        />
      </Stack>
      <Stack>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon = {<FavoriteIcon fontSize="inherit" color="error"/>}
          emptyIcon= {<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
      </Stack>
    </Stack>
  );
};

export default MuiRating;
