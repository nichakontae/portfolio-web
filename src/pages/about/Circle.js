import { Box } from "@mui/material";
import React from "react";

const Circle = ({ path, name }) => {
  return (
    <Box className="relative">
      <img
        src={path}
        alt={name}
        style={{ width: "12rem" }}
        className="absolute left-[8rem] top-[1rem] shadow-xl z-10"
      />
      <Box
        className="bg-gradient-to-r from-[#3378ff] to-[#9442fe] mb-[4rem] opacity-50"
        sx={{ width: "20rem", height: "20rem", borderRadius: "10rem" }}
      ></Box>
    </Box>
  );
};

export default Circle;
