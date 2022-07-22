import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import "../App.css";

const Footer = () => {
  return (
    <Box
      className="flex flex-row justify-between items-center"
      sx={{
        padding: "0rem calc((100vw - 1800px) / 2)",
        height: "5rem",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box className="pl-8">
        <Typography>
          &copy; 2022 nnch. &nbsp; &nbsp;
          <span className="md:inline hidden">ALL RIGHTS RESERVED.</span>
        </Typography>
      </Box>
      {/* <Box className="flex flex-row  cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition ease-in-out delay-150 hover:scale-125 hover:-translate-y-2 duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <Typography>BACK TO TOP</Typography>
      </Box> */}
      <Box className="nav-link-footer pr-8">
        <EmailIcon className="cursor-pointer icon" />
        <FacebookIcon className="cursor-pointer icon" />
        <GitHubIcon className="cursor-pointer icon" />
        <InstagramIcon className="cursor-pointer icon" />
      </Box>
    </Box>
  );
};

export default Footer;
