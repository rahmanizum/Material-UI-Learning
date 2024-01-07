import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List item 1" secondary="secondary text"/>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="secondary text"/>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemText primary="List item 3"  secondary="secondary text"/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
