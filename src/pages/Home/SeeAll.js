import { Box, Typography } from "@mui/material";
import React from "react";

const SeeAll = ({ marY }) => {
  return (
    <Box sx={{ width: "100%" }} className="flex justify-center">
      <Box
        className="flex items-center cursor-pointer transition ease-in-out delay-150 bg-gradient-to-r from-[#3378ff] to-[#9442fe] shadow-md hover:shadow-lg hover:scale-105 duration-300 my-10"
        sx={{
          width: { xs: "50rem", md: "20rem" },
          height: "3rem",
          borderRadius: "2rem",
        }}
      >
        <Typography sx={{ width: "100%", textAlign: "center", color: "white" }}>
          SEE ALL
        </Typography>
      </Box>
    </Box>
  );
};

export default SeeAll;
