import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          row
        >
          <FormControlLabel label="0-2" control={<Radio />} value="0-2" />
          <FormControlLabel label="3-5" control={<Radio />} value="3-5" />
          <FormControlLabel label="6-10" control={<Radio />} value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
