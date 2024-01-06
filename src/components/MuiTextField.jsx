import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { Visibility } from "@mui/icons-material";

const MuiTextField = () => {
    const[passwordType,setPasswordType] = useState("password")
    const[inputPassword, setInputPassword]  = useState("");
    const[inputPasswordColor,setInputPasswordColor] = useState("primary")

    const inputpasswordhandler = (e)=>{
        if(!e.target.value.includes('@')){
            setInputPasswordColor("error");
        }else{
            setInputPasswordColor("primary");
        }
        setInputPassword(e.target.value)
    }
    const visibilityHandler = (e)=>{
        
        setPasswordType((passwordType)=>{
            return passwordType==="password" ? "text" : "password"
        })
    }
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          variant="outlined"
          size="small"
          color="secondary"
          error = {false}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          variant="outlined"
          color="info"
          size="small"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          color="info"
          size="small"
          helperText="Do not share your password with anyone"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" size="small" type="text" />
        <TextField
          label="Password"
          size="small"
          helperText="Do not share your password with anyone"
          type="password"
        />
        <TextField label="Phone Number" size="small" type="number" disabled />
        <TextField
          label="Read only"
          size="small"
          type="number"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <TextField
          label="Amount"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">$</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end"> Kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          size="small"
          type= {passwordType}
          color={inputPasswordColor}
          value={inputPassword}
          InputProps={{
            endAdornment: <InputAdornment position="end"> {<Visibility onClick = {visibilityHandler}/>}</InputAdornment>,
          }}
          onChange={inputpasswordhandler}
        ></TextField>
      </Stack>
    </Stack>
  );
};
export default MuiTextField;
