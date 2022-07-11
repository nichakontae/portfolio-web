import { Typography, Box } from "@mui/material";
import React from "react";

const TextHead = ({ text }) => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "4rem" }}
        className="pt-5 grid justify-center"
      >
        {text}
      </Typography>
      <Box sx={{ width: "100%" }} className="grid justify-center">
        <hr style={{ border: "1px solid", width: "7rem", margin: "0" }} />
      </Box>
    </Box>
  );
};

export default TextHead;
