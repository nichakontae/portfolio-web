import { Box, Typography } from "@mui/material";
import React from "react";

const Group = ({ type }) => {
  return (
    <Box
      className="flex justify-center items-center bg-[#aad0d9] shadow-lg"
      sx={{
        padding: "0.5rem 1rem",
        maxWidth: "5rem",
        border: "1px solid black",
        borderRadius: "4rem",
      }}
    >
      <Typography>{type}</Typography>
    </Box>
  );
};

export default Group;
