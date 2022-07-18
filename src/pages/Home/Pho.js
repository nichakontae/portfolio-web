import React from "react";
import { Box } from "@mui/material";
import TextHead from "./TextHead";
import MiniBoxPho from "./MiniBoxPho";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";
import { photos } from "../../shared/photos";

const Pho = ({ onPhotoClick }) => {
  return (
    <>
      <Box
        sx={{
          height: { xs: "100%", xl: "100vh" },
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Box className="pl-8 pt-[8rem] pr-8">
          <TextHead text="Photography" />
          <Box className="flex md:flex-col lg:flex-col xl:flex-row flex-col mt-[5rem] justify-center items-center xl:gap-x-[2rem]">
            <Box
              className="overflow-hidden mb-5 cursor-pointer transition ease-in-out delay-150 hover:shadow-lg hover:scale-105 duration-300 bg-gradient-to-r from-[#a0bef8] to-[#b5f0f0]"
              sx={{
                height: "30rem",
                width: { xs: "100%", md: "42rem", xl: "35rem" },
                // backgroundColor: "#adccef",
                borderRadius: "2rem",
              }}
              onClick={() => onPhotoClick(photos[0])}
            >
              <img
                src={photos[0].source}
                alt={photos[0].name}
                style={{
                  transform: photos[0].horizontal ? "scale(3)" : "scale(1)",
                }}
              />
            </Box>

            <Box>
              <Box className="flex md:flex-row flex-col md:gap-x-[2rem] overflow-hidden">
                {photos
                  .filter((el) => {
                    return el.id > 0 && el.id < 3;
                  })
                  .map((ml) => (
                    <MiniBoxPho key={ml.id} photo={ml} onClick={onPhotoClick} />
                  ))}
              </Box>
              <Box className="flex md:flex-row flex-col md:gap-x-[2rem] overflow-hidden">
                {photos
                  .filter((el) => {
                    return el.id > 2 && el.id < 5;
                  })
                  .map((ml) => (
                    <MiniBoxPho key={ml.id} photo={ml} onClick={onPhotoClick} />
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="pr-8 pl-8">
        <Link to="/photography">
          <SeeAll />
        </Link>
      </Box>
      {/* <Box>{photoPost}</Box> */}
    </>
  );
};

export default Pho;
