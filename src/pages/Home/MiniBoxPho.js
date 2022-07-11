import React from "react";
import { Box } from "@mui/material";

const MiniBoxPho = () => {
  return (
    <Box
      className="mb-5 cursor-pointer transition ease-in-out delay-150 hover:shadow-lg hover:scale-105 duration-300  bg-gradient-to-r from-[#a0bef8] to-[#b5f0f0]"
      sx={{
        height: "14.4rem",
        width: { xs: "100%", md: "20rem" },
        // backgroundColor: "#9442fe",
        borderRadius: "2rem",
      }}
    ></Box>
  );
};

export default MiniBoxPho;
