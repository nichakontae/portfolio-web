import React from "react";
import { Box, Typography } from "@mui/material";
import TextHead from "./TextHead";
import BoxPro from "./BoxPro";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";
import { projects } from "../../shared/projects";
import "./pro.css";

const Pro = ({ onButtonClick, onProjectClick }) => {
  return (
    <>
      <Box className="md:relative -z-10">
        <Box
          className="md:block hidden md:absolute md:top-[19rem]"
          sx={{ backgroundColor: "#eed5d1", width: "100%", height: "21rem" }}
        ></Box>
      </Box>
      <Box
        sx={{
          height: { xs: "100%", lg: "100vh" },
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pt-[8rem] pr-8">
          <TextHead text="Project" />

          {/* <Box>
            <Box className="grid  md:grid-cols-3 mb-[5rem]">
              {projects
                .filter((e) => {
                  return e.id <= 2;
                })
                .map((el) => (
                  <Link to={`/project/${el.url}`} key={el.id}>
                    <BoxPro
                      project={el}
                      onProjectClick={onProjectClick}
                      onButtonClick={onButtonClick}
                    />
                  </Link>
                ))}
            </Box>
            <Link to="/project">
              <SeeAll onButtonClick={onButtonClick} />
            </Link>
          </Box> */}
        </Box>
        <Box
          sx={{ width: "100%", height: "18rem" }}
          className="flex flex-col justify-center items-center bg-[#aad0d9] mt-5"
        >
          <Typography sx={{ fontSize: "1.25rem" }}>Coming Soon</Typography>
          <Box className="container">
            <Box className="dot dot1"></Box>
            <Box className="dot dot2"></Box>
            <Box className="dot dot3"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Pro;
