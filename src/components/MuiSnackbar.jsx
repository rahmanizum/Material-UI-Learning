import React, { useState,forwardRef } from "react";
import { Snackbar, Button, Alert} from "@mui/material";

const SnackBarAlert = forwardRef(function snackBarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form succesfully submitted!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
      /> */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <SnackBarAlert onClose={handleClose} severity = "success">
            Form Submitted Succesfully
        </SnackBarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;
