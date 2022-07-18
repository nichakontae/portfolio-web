import React from "react";
import { Box, Typography } from "@mui/material";
import Circle from "./Circle";

const Book = () => {
  return (
    <>
      <Typography sx={{ fontSize: "2rem" }}>Currently reading</Typography>
      <Box className="flex xl:flex-row flex-col gap-x-[8rem] gap-y-[2rem] justify-center mt-[3rem]">
        <Box className="flex xl:flex-col flex-row justify-center items-center gap-x-[3rem]">
          <Circle path="assets/images/b1.jpg" name="book no.1" />

          <Box className="relative top-[-1.5rem]">
            <Typography variant="h6">Book name</Typography>
            <Typography sx={{ color: "#AAABAB" }}>Author</Typography>
          </Box>
        </Box>

        <Box className="flex xl:flex-col flex-row justify-center items-center gap-x-[3rem]">
          <Circle path="assets/images/b2.jpg" name="book no.1" />
          <Box className="relative top-[-1.5rem]">
            <Typography variant="h6">Book name</Typography>
            <Typography sx={{ color: "#AAABAB" }}>Author</Typography>
          </Box>
        </Box>

        <Box className="flex xl:flex-col flex-row justify-center items-center gap-x-[3rem]">
          <Circle path="assets/images/b3.jpg" name="book no.1" />
          <Box className="relative top-[-1.5rem]">
            <Typography variant="h6">Book name</Typography>
            <Typography sx={{ color: "#AAABAB" }}>Author</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Book;
