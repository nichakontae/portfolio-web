import React from "react";
import { projects } from "../../shared/projects";
import BoxForWork from "../BoxForWork";
import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <>
      <Box
        sx={{
          //   height: { xs: "100% ", lg: "100vh" },
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pt-[8rem] pr-8">
          <Typography variant="h3" sx={{ color: "#3378ff" }}>
            Projects
          </Typography>
          <hr
            className="mt-3"
            style={{ border: "2px solid black", width: "7rem" }}
          />
        </Box>
      </Box>
      <Box className="pl-8 pt-5 pr-8 mb-[5rem] flex flex-col justify-center items-center">
        <Box className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-x-[3rem] gap-y-[3rem] ">
          {projects.map((el) => (
            <BoxForWork
              key={el.id}
              name={el.name}
              source={el.source}
              type={el.type}
              horizontal={el.horizontal}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default index;
