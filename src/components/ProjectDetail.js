import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider";
import { photos } from "../shared/photos";
import Group from "./Group";

const ProjectDetail = () => {
  return (
    <Box>
      <img
        src="assets/images/photo1.jpg"
        alt="project1"
        style={{ height: "100vh" }}
      />
      <Container>
        <Typography variant="h3" className="py-5 text-[#aad0d9]">
          Project Name
        </Typography>
        <Typography>explain about project in few sentence</Typography>
        <Typography>this web app was made from</Typography>
        <Box className="flex gap-x-[1rem] my-3">
          <Group type="React" />
          <Group type="MUI" />
          <Group type="tailwind" />
        </Box>

        <Typography>Preview Website</Typography>
        <ImageSlider photoLength={photos} />
        <Typography>
          watching website :
          <a
            href="www.google.com"
            style={{ textDecoration: "underline", color: "#e5b9b6" }}
          >
            website name
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
