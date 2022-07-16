import React from "react";
import { Box } from "@mui/material";
import TextHead from "./TextHead";
import BoxPro from "./BoxPro";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";
import { projects } from "../../shared/projects";

const Pro = () => {
  return (
    <>
      <Box className="md:relative -z-10">
        <Box
          className="md:block hidden md:absolute md:top-[19rem]"
          sx={{ backgroundColor: "#D9D9D9", width: "100%", height: "21rem" }}
        ></Box>
      </Box>
      <Box
        sx={{
          height: { xs: "100%", lg: "100vh" },
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pt-[8rem] pr-8">
          <TextHead text="Project" />

          <Box>
            <Box className="grid md:grid-cols-3 mb-[5rem]">
              {projects
                .filter((e) => {
                  return e.id <= 2;
                })
                .map((el) => (
                  <BoxPro
                    name={el.name}
                    source={el.source}
                    type={el.type}
                    horizontal={el.horizontal}
                  />
                ))}
            </Box>
            <Link to="/work">
              <SeeAll />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Pro;
