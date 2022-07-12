import React from "react";
import { Box } from "@mui/material";
import TextHead from "./TextHead";
import MiniBoxPho from "./MiniBoxPho";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";

const Pho = () => {
  return (
    <Box
      sx={{
        height: { xs: "100%", lg: "100vh" },
        width: "100%",
        padding: "0rem calc((100vw - 1700px) / 2)",
        // backgroundColor: "#f7f7f7",
      }}
    >
      <Box className="pl-8 pt-[8rem] pr-8">
        <TextHead text="Photography" />
        <Box className="flex md:flex-row flex-col mt-[5rem] justify-center md:gap-x-[2rem]">
          <Box
            className="mb-5 cursor-pointer transition ease-in-out delay-150 hover:shadow-lg hover:scale-105 duration-300 bg-gradient-to-r from-[#a0bef8] to-[#b5f0f0]"
            sx={{
              height: "30rem",
              width: { xs: "100%", md: "35rem" },
              // backgroundColor: "#adccef",
              borderRadius: "2rem",
            }}
          ></Box>

          <Box>
            <Box className="flex md:flex-row flex-col md:gap-x-[2rem]">
              <MiniBoxPho />
              <MiniBoxPho />
            </Box>
            <Box className="flex md:flex-row flex-col md:gap-x-[2rem]">
              <MiniBoxPho />
              <MiniBoxPho />
            </Box>
          </Box>
        </Box>
        <Link to="/work">
          <SeeAll />
        </Link>
      </Box>
    </Box>
  );
};

export default Pho;
