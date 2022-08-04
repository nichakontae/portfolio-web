import { Box, Typography } from "@mui/material";
import React from "react";

const SeeAll = ({ onButtonClick }) => {
  return (
    <Box
      sx={{ width: "100%" }}
      className="flex justify-center"
      onClick={onButtonClick}
    >
      <Box
        className="flex items-center cursor-pointer transition ease-in-out delay-150 bg-[#295bb7] shadow-md hover:shadow-lg hover:scale-105 duration-300 my-10"
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
