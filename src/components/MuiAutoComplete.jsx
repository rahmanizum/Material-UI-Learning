import React ,{useState}from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

const skills = ["HTML", "JAVASCRIPT", "CSS", "TYPE SCRIPT", "REACT"];
const skillOptions = skills.map((ele,index)=>{
    return{
        id:index+1,
        label: ele
    }
})
const MuiAutoComplete = () => {
    const [value,setValue] = useState([]);
    const [freeValue,setFreeValue] = useState(null);
    const [skill,setSkill] = useState(null)
    console.log({value});
  return (
    <Stack spacing={2} width="500px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(e,value)=>setValue(value)}
        multiple
      />
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={freeValue}
        onChange={(e,value)=>setFreeValue(value)}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(e,value)=>setSkill(value)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
