import React, { useState } from "react";
import { Box, TextField, MenuItem,Stack } from "@mui/material";
const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  return (
<Stack direction='row' gap={3}>
    <Box width="250px">
      <TextField
        label="Select country"
        value={country}
        select
        onChange={(e) => setCountry(e.target.value)}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="USA">United States</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
    <Box width="250px">
      <TextField
        label="Select multiple country"
        value={countries}
        select
        onChange={(e) => setCountries(e.target.value)}
        fullWidth
        SelectProps={{
            multiple:true
        }}
        size="small"
        color="success"

      >
        <MenuItem value="IND">India</MenuItem>
        <MenuItem value="USA">United States</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
    </Stack>
  );
};

export default MuiSelect;
