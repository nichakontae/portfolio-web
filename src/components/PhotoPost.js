import { Box, Typography } from "@mui/material";
import React from "react";
import "./PhotoPost.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AppsIcon from "@mui/icons-material/Apps";
import { Link } from "react-router-dom";

const PhotoPost = ({ photo, onBgClick }) => {
  return (
    <Box className="photo-post">
      <Box className="photo-post-bg" onClick={onBgClick} />
      <Box className="photo-post-content">
        <ArrowBackIosIcon className="left-arrow" />
        <ArrowForwardIosIcon className="right-arrow" />
        <img src={photo.source} alt={photo.name} />
        <Typography className="text">{photo.name}</Typography>
        {/* <Link to="/photography" onClick={onBgClick}>
          <Box className="flex justify-center">
            <AppsIcon className="app-icon" />
          </Box>
        </Link> */}
      </Box>
    </Box>
  );
};

export default PhotoPost;
