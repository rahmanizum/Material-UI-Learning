import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at
            vero assumenda excepturi vitae harum sit aliquid, doloribus earum
            totam! Assumenda debitis quaerat enim, alias sequi nisi? Commodi,
            sint corporis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
