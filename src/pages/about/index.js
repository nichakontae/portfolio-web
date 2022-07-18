import { Box, Typography } from "@mui/material";
import React from "react";
import Book from "./Book";

const index = () => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "100%", lg: "100vh" },
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pt-[8rem] pr-8">
          <Box className="grid grid-rows-[1fr_0.5fr] lg:grid-cols-[1fr_2fr] lg:gap-x-[1.5rem] xl:gap-x-[6rem] lg:gap-y-[3rem]">
            <Box
              sx={{ borderRadius: "1rem" }}
              className="overflow-hidden shadow-xl"
            >
              <img
                src="assets/images/03.jpg"
                alt="eve"
                style={{ transform: "scale(1.3)" }}
              />
            </Box>
            <Box
              className="md:pr-[4rem] lg:pr-[3rem] xl:pr-[10rem] flex items-center pt-5"
              sx={{ height: "100%" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: "2.5rem",
                  }}
                >
                  I'm Eve, a full-stack developer and also photography.
                </Typography>
                <Box className="mt-16"></Box>
                <Typography
                  sx={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: "2.5rem",
                  }}
                >
                  Born and raised in Thailand. Currently education at King
                  Mongkut's University of Technology Thonburi
                </Typography>
                <Box className="mt-[2rem]">
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* สกิลที่มี และ ตอนนี้เรียนอยู่ที่ไหน */}
      <Box
        sx={{
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pr-8">
          <Book />
        </Box>
      </Box>
    </>
  );
};

export default index;
