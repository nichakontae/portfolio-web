import React from "react";
import { Box } from "@mui/material";

const MiniBoxPho = ({ photo, onClick }) => {
  return (
    <Box
      className="mb-5 cursor-pointer transition ease-in-out delay-150 hover:shadow-xs duration-300  bg-gradient-to-r from-[#a0bef8] to-[#b5f0f0]"
      sx={{
        height: "14.4rem",
        width: { xs: "100%", md: "20rem" },
        // backgroundColor: "#9442fe",
        borderRadius: "2rem",
        overflow: "hidden",
      }}
      onClick={() => {
        onClick(photo);
      }}
    >
      <img
        src={photo.source}
        alt={photo.name}
        style={{
          transform: photo.horizontal ? "scale(2)" : "scale(3)",
        }}
      />
    </Box>
  );
};

export default MiniBoxPho;
