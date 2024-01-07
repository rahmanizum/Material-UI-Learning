import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialogue</Button>
      <Dialog
        open={open}
        aria-labelledby="dailog-title"
        aria-describedby="dailog description"
      >
        <DialogTitle id="dailog-title">Submit the test </DialogTitle>
        <DialogContent>
          <DialogContentText id="dailog-description">
            Are you sure to submit this test? You cannot undo this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus> Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;

