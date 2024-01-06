import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [bookmark, SetBookmark] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log({skills});
const handleSkillChange = (e)=>{
    const index = skills.indexOf(e.target.value)
    if(index === -1){
        setSkills([...skills, e.target.value])
    }else{
        setSkills(skills.filter((val)=> val!==e.target.value))
    }
}
  return (
    <Box sx={{ mb: 2 }}>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox />}
          checked={acceptTnC}
          onChange={(e) => setAcceptTnC(e.target.checked)}
        />
      </Box>
      <Box sx={{ color: "red" }}>
        {!acceptTnC && "Please Accept Terms & Conditions"}
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={bookmark}
          onChange={(e) => SetBookmark(e.target.checked)}
        />
      </Box>
      <Box sx={{ color: "green" }}>
        {!bookmark && "Please tick to bookmark"}
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup onChange={handleSkillChange} row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={<Checkbox checked = {skills.includes('html')} />}
            />
            <FormControlLabel
              label="CSSffff"
              value="css"
              control={<Checkbox checked = {skills.includes('css')} />}
            />
            <FormControlLabel
              label="JAVA SCRIPT"
              value="js"
              control={<Checkbox checked = {skills.includes('js')} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
export default MuiCheckBox;
