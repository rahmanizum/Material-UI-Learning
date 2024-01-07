import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
const MuiChip = () => {
    const[chips,setChips] = useState(['Chip 1','Chip 2','Chip 3'])
    const deleteHandler = (chip)=>{
        setChips(chips.filter((item)=>item!==chip))
    }
  return (
<Stack spacing={4}>
<Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip
        label="Chip outlined"
        color="primary"
        size="small"
        variant="outlined"
      />
      <Chip
        label="Chip outlined"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Chip outlined"
        color="secondary"
        variant="outlined"
        icon={<FaceIcon />}
      />
      <Chip label="Click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="Click"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("delete clicked")}
      />
    </Stack>
    <Stack direction='row' spacing={2}>
        {chips.map((ele)=>{
            return <Chip key={ele} label= {ele} color="warning" onDelete={()=>deleteHandler(ele)}/>
        })}
    </Stack>
</Stack>
  );
};

export default MuiChip;
