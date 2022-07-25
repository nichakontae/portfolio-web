import React from "react";
import { Box, Typography } from "@mui/material";

const Skills = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pr-8 py-[2rem]">
          <Typography sx={{ fontSize: "2rem" }}>Technical Skills</Typography>
          <Box className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem]">
            <Box className="shadow-lg rounded-[1rem] overflow-hidden py-10">
              <Typography
                className="pb-5"
                sx={{ textAlign: "center", textDecoration: "underline" }}
              >
                Frontend Development
              </Typography>

              <Box className="flex pl-10 pr-10 pb-[0.5rem] gap-[0.5rem] justify-center">
                <Box
                  className="overflow-hidden rounded-[0.5rem]  flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem]  flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/html.png"
                      alt="html"
                      className="scale-150"
                    />
                  </Box>
                  <Typography>html</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem]  flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem]  flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/css.png"
                      alt="css"
                      className="scale-150"
                    />
                  </Box>
                  <Typography>css</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#f7df1e]"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img src="assets/images/js.png" alt="js" />
                  </Box>
                  <Typography>js</Typography>
                </Box>
              </Box>
              <Box className="flex pl-10 pr-10 pb-[0.5rem] gap-[0.5rem] justify-center">
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#222222] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img src="assets/images/react.png" alt="react" width="40" />
                  </Box>
                  <Typography>react</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem]  flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#20293a]  flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/tailwind.png"
                      alt="tailwind"
                      width="40"
                    />
                  </Box>
                  <Typography>tailwind</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#081d3a]  flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img src="assets/images/mui.png" alt="mui" width="40" />
                  </Box>
                  <Typography>mui</Typography>
                </Box>
              </Box>
              <Box className="flex pl-10 pr-10 gap-[0.5rem] justify-center">
                <Box
                  className="overflow-hidden rounded-[0.5rem]  flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem]  flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/bs.png"
                      alt="bootstrap"
                      className="scale-[1.8]"
                    />
                  </Box>
                  <Typography>bootstrap</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="shadow-lg rounded-[1rem] overflow-hidden py-10">
              <Typography
                className="pb-5"
                sx={{ textAlign: "center", textDecoration: "underline" }}
              >
                Backend Development
              </Typography>
              <Box className="flex pl-10 pr-10 gap-[0.5rem] justify-center ">
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#333333] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/nodejs.png"
                      alt="nodejs"
                      width="40"
                      height="60"
                    />
                  </Box>
                  <Typography>nodejs</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col  justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#323232] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img src="assets/images/express.png" alt="express" />
                  </Box>
                  <Typography>express</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem]  flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem]  flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img src="assets/images/mongodb.png" alt="mongodb" />
                  </Box>
                  <Typography>MongoDB</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="shadow-lg rounded-[1rem] overflow-hidden py-10">
              <Typography
                className="pb-5"
                sx={{ textAlign: "center", textDecoration: "underline" }}
              >
                Tools Development
              </Typography>
              <Box className="flex pl-10 pr-10 gap-[0.5rem] justify-center ">
                <Box
                  className="overflow-hidden rounded-[0.5rem]  flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  {" "}
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#f05133] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/git.png"
                      alt="git"
                      width="60"
                      height="60"
                    />
                  </Box>
                  <Typography>git</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/github.jpeg"
                      alt="github"
                      width="60"
                      height="60"
                      className="scale-150"
                    />
                  </Box>
                  <Typography>github</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] bg-[#333333] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/figma.png"
                      alt="figma"
                      width="30"
                      // height="60"
                    />
                  </Box>
                  <Typography>figma</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="shadow-lg rounded-[1rem] overflow-hidden py-10">
              <Typography
                className="pb-5"
                sx={{ textAlign: "center", textDecoration: "underline" }}
              >
                Graphic Skills
              </Typography>
              <Box className="flex pl-10 pr-10 gap-[0.5rem] justify-center ">
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/ps.png"
                      alt="photoshop"
                      className="scale-[1.2]"
                    />
                  </Box>
                  <Typography sx={{ fontSize: "0.8rem" }}>photoshop</Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  {" "}
                  <Box
                    className="overflow-hidden rounded-[0.5rem] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/ai.png"
                      alt="illustrator"
                      className="scale-[1.2]"
                    />
                  </Box>
                  <Typography sx={{ fontSize: "0.8rem" }}>
                    illustrator
                  </Typography>
                </Box>
                <Box
                  className="overflow-hidden rounded-[0.5rem] flex flex-col justify-center items-center"
                  // sx={{ width: "4rem", height: "4rem" }}
                >
                  <Box
                    className="overflow-hidden rounded-[0.5rem] flex justify-center items-center"
                    sx={{ width: "4rem", height: "4rem" }}
                  >
                    <img
                      src="assets/images/pr.png"
                      alt="premiere pro"
                      // className="scale-[1.1]"
                    />
                  </Box>
                  <Typography sx={{ fontSize: "0.8rem" }}>premiere</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
