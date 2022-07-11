import { Typography } from "@mui/material";
import React from "react";

const Fig = ({ text, source }) => {
  return (
    <a href={source} className="cursor-pointer hover:text-white">
      <Typography sx={{ textDecoration: "underline" }}>{text}</Typography>
    </a>
  );
};

export default Fig;
