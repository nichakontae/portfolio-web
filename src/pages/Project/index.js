import React from "react";
import { projects } from "../../shared/projects";
import BoxForPro from "../../components/BoxForPro";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./projectpage.css";

const index = ({ onProjectClick }) => {
  return (
    <Box sx={{ height: "100vh" }}>
      {/* <Box
        sx={{
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          backgroundColor: "#f7f7f7",
        }}
      > */}
      <Box
        sx={{ width: "100vw" }}
        className="relative top-[50%] flex flex-col items-center gap-y-5"
      >
        <div class="loader">
          <div class="loader-inner"></div>
        </div>
        <Typography className="text">COMING SOON</Typography>
      </Box>

      {/* <Box className="pl-8 pt-[8rem] pr-8">
          <Typography variant="h3" sx={{ color: "black" }}>
            Projects
          </Typography>
          <hr
            className="mt-3"
            style={{ border: "2px solid #295bb7", width: "7rem" }}
          />
        </Box> */}
      {/* </Box> */}
      {/* <Box
        className="pl-8 pt-5 pr-8 pb-[5rem] flex flex-col justify-center items-center"
        sx={{ backgroundColor: "#f7f7f7" }}
      >
        <Box
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-x-[3rem] gap-y-[3rem] "
          sx={{ backgroundColor: "#f7f7f7" }}
        >
          {projects.map((el) => (
            <Link to={`/project/${el.url}`} key={el.id}>
              <BoxForPro project={el} onProjectClick={onProjectClick} />
            </Link>
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};

export default index;
