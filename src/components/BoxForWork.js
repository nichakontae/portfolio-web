import { Box, Typography } from "@mui/material";
import React from "react";

const BoxForWork = ({ photo, onPhotoClick, onProjectClick, project }) => {
  return (
    <Box
      className="overflow-hidden transition ease-in-out delay-150 hover:shadow-xs hover:scale-[1.02]  duration-300 relative cursor-pointer"
      sx={{
        borderRadius: "2rem",
        width: "20rem",
        height: "24rem",
        backgroundColor: "#f7f7f7",
      }}
      onClick={() => {
        onPhotoClick(photo);
      }}
    >
      <img
        src={photo.source}
        alt={photo.name}
        // className="scale-[1]"
        style={{ transform: photo.horizontal ? "scale(4)" : "scale(1)" }}
      />
      <Box
        className="transition ease-in-out delay-150 opacity-100 hover:opacity-0 duration-300 absolute top-0 left-0"
        sx={{ width: "100%", height: "100%" }}
      >
        <Box
          sx={{
            //   borderRadius: "10rem",
            width: "10rem",
            height: "10rem",
            backgroundColor: "#96a9cc",
          }}
          className="rotate-45 absolute top-[7.5rem] left-[5rem]"
        >
          <Box className="rotate-[-45deg] relative top-[3.5rem] left-[0rem]">
            <Box className="flex flex-col items-center">
              <Typography>{photo.name}</Typography>
              <Typography className="text-gray-500">{photo.type}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxForWork;
