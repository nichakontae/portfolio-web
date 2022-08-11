import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Skills from "../../components/Skills";
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
        <Box
          className="pl-8 pr-8 pt-[5rem] lg:pt-0"
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          {/* <Box className="grid grid-rows-[1fr_0.5fr] lg:grid-cols-[1fr_2fr] lg:gap-x-[1.5rem] xl:gap-x-[6rem]"> */}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            sx={{ height: "100%" }}
          >
            <Box
              sx={{ height: "100%" }}
              className="flex items-center pr-[2rem]"
            >
              <img
                src="assets/images/03.jpg"
                alt="eve"
                style={{
                  borderRadius: "1rem",
                }}
              />
            </Box>

            <Box
              className="md:pr-[4rem] lg:pr-[3rem] xl:pr-[10rem] my-[2rem] flex items-center pt-5"
              sx={{ height: "100%" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "clamp(1rem, 4vw, 1.6rem)",
                    lineHeight: "2.5rem",
                  }}
                >
                  <span style={{ color: "#295bb7" }}> I'm Eve,</span> a
                  full-stack developer and also photographer.
                </Typography>
                <Box className="mt-[2rem]">
                  <Typography
                    sx={{
                      fontSize: "clamp(1rem, 4vw, 1.6rem)",
                      lineHeight: "2.5rem",
                    }}
                  >
                    Born and raised in Thailand. Currently education at King
                    Mongkut's University of Technology Thonburi
                  </Typography>
                </Box>
                <Box className="mt-[2rem]">
                  <Typography
                    sx={{
                      fontSize: "clamp(1rem, 4vw, 1.6rem)",
                      lineHeight: "2.5rem",
                    }}
                  >
                    I'm just a person who love coding and try to learn anything
                    that I'm interested. This website is an exhibit to show all
                    my work both coding and photography.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>

          {/* </Box> */}
        </Box>
      </Box>
      {/* สกิลที่มี และ ตอนนี้เรียนอยู่ที่ไหน */}
      <Skills />
      {/* <Box
        sx={{
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pr-8">
          <Book />
        </Box>
      </Box> */}
    </>
  );
};

export default index;
