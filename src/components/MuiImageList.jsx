import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";
const itemData = [
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 1",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 2",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 3",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 5",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 6",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 1",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 2",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 3",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 4",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 5",
  },
  {
    img: "https://source.unsplash.com/random",
    title: "Random image 6",
  },
];

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((ele, index) => (
          <ImageListItem key={index}>
            {" "}
            <img src={ele.img} alt={ele.title} loading="lazy" />
            <ImageListItemBar title={ele.title} position="center"/>
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
        gap={8}
      >
        {itemData.map((ele, index) => (
          <ImageListItem key={index}>
            {" "}
            <img src={ele.img} alt={ele.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((ele, index) => (
            <ImageListItem key={index}>
              {" "}
              <img src={ele.img} alt={ele.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImageList;
