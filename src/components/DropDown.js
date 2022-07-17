import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
const DropDown = () => {
  return (
    <Box className="grid grid-rows-5 text-center items-center relative top-[60px]">
      <Link to="/work" className="p-4">
        <Typography>Work</Typography>
      </Link>
      <Link to="project" className="p-4">
        <Typography>Project</Typography>
      </Link>
      <Link to="/photography" className="p-4">
        <Typography>Photography</Typography>
      </Link>
      <Link to="/about" className="p-4">
        <Typography>About</Typography>
      </Link>
      <Box>
        <EmailIcon className="cursor-pointer" />
        <FacebookIcon className="cursor-pointer" />
        <InstagramIcon className="cursor-pointer" />
        <GitHubIcon className="cursor-pointer" />
      </Box>
    </Box>
  );
};

export default DropDown;
