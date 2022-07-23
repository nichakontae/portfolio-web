import { Box, Typography } from "@mui/material";
import React from "react";
import "./PhotoPost.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const PhotoPost = ({ photo, onBgClick }) => {
  const [current, setCurrent] = useState(0);
  // const []
  return (
    <Box className="photo-post">
      <Box className="photo-post-bg" onClick={onBgClick} />
      <Box className="photo-post-content">
        <img src={photo.source} alt={photo.name} />
        <Typography className="text">{photo.name}</Typography>
      </Box>
    </Box>
  );
};

export default PhotoPost;
