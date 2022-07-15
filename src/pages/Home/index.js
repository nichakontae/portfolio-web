import { Box, Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import Pro from "./Pro";
import Pho from "./Pho";

const Index = () => {
  return (
    <>
      <Box
        className="grid grid-cols-2 items-center"
        sx={{
          height: "100%",
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="grid pl-8 z-10 ">
          <Box>
            <hr
              className="md:block hidden"
              style={{ border: "2px solid #3378ff", width: "7rem" }}
            />
            <Typography className="pt-10">
              Hi, I'm Eve. I'm a full-stack developer and also photography.
            </Typography>
            <Typography>Welcome to my portfolio !</Typography>
          </Box>
          <Box className="relative top-[9rem] md:left-[11rem] left-[3rem] md:pt-[5rem] ">
            <Typography
              className="md:tracking-tighter tracking-tighterer z-10"
              sx={{
                fontSize: "clamp(3.5rem , 10vw , 9rem)",
                color: "#3378ff",
                lineHeight: {
                  xs: "3.25rem",
                  md: "7rem",
                },
              }}
            >
              NICHAKON
            </Typography>
            <Typography
              className="md:tracking-tighter tracking-tighterer z-10"
              sx={{
                fontSize: "clamp(3.5rem , 10vw , 9rem)",

                lineHeight: {
                  xs: "3.25rem",
                  md: "7rem",
                },
              }}
            >
              SEEHABONG
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            className="-z-1 pimg"
            sx={{
              height: "100vh",
              // overflow: "hidden",
            }}
          >
            {/* <img src="assets/images/01.jpg" alt="eve" /> */}
          </Box>
        </Box>
      </Box>
      <Box>
        <Pro />
      </Box>
      <Box>
        <Pho />
      </Box>
    </>
  );
};

export default Index;
