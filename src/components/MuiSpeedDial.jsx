import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrinIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dail"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon = {<SpeedDialIcon openIcon ={<EditIcon/>} />}
    >
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle = 'Copy' tooltipOpen/>
        <SpeedDialAction icon={<PrinIcon/>} tooltipTitle = 'Print' tooltipOpen/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle = 'Share' />
    </SpeedDial>
  );
};
export default MuiSpeedDial;
