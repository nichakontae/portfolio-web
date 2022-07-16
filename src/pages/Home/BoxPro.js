import React from "react";
import { Box, Typography } from "@mui/material";

const BoxPro = ({ name, source, type, horizontal }) => {
  return (
    <Box className="flex justify-center relative">
      <Box
        className="overflow-hidden mt-[5rem] cursor-pointer transition ease-in-out delay-150 bg-[#e7f0fd] hover:shadow-lg md:hover:shadow-none md:hover:scale-y-150 md:hover:bg-[#3378ff] duration-300"
        sx={{
          height: { xs: "25rem", md: "18rem" },
          width: { xs: "100%", md: "80%" },
          borderRadius: "1rem",
        }}
      >
        <img
          src={source}
          alt={name}
          // className="scale-[1]"
          style={{
            transform: {
              xs: "scale(10)",
              md: horizontal ? "scale(1)" : "scale(4)",
            },
          }}
        />
      </Box>
      <Box className="absolute md:top-[13rem] top-[15rem] ">
        <Box
          className="flex flex-col items-center"
          sx={{
            backgroundColor: "rgb(203 213 225)",
            width: "15rem",
            padding: "1rem 0.5rem",
            // height: "10rem",
            borderRadius: "4rem",
          }}
        >
          <Typography>{name}</Typography>
          <Typography className="text-gray-500">{type}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxPro;
