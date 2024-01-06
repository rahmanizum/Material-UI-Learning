import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log({ skills });
  const handleChange = () => {
    setChecked(!checked);
  };
  const handlSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((val) => val !== e.target.value));
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch checked={checked} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <FormControl>
        <FormLabel>Skills</FormLabel>
        <FormGroup onChange={handlSkillsChange}>
          <FormControlLabel
            label="CSS"
            value="css"
            control={<Switch checked={skills.includes("css")} />}
          />
          <FormControlLabel
            label="HTML"
            value="html"
            control={<Switch checked={skills.includes("html")} />}
          />
          <FormControlLabel
            label="JAVA SCRIPT"
            value="js"
            control={<Switch checked={skills.includes("js")} />}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default MuiSwitch;
