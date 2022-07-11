import React from "react";
import { Box, Typography } from "@mui/material";

const BoxPro = () => {
  return (
    <Box className="flex justify-center">
      <Box
        className="mt-[5rem] cursor-pointer transition ease-in-out delay-150 bg-[#e7f0fd] hover:shadow-lg md:hover:shadow-none md:hover:scale-y-150 md:hover:bg-[#3378ff] duration-300"
        sx={{
          height: { xs: "25rem", md: "18rem" },
          width: { xs: "100%", md: "80%" },
          borderRadius: "1rem",
        }}
      ></Box>
    </Box>
  );
};

export default BoxPro;
