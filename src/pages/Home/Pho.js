import React from "react";
import { Box } from "@mui/material";
import TextHead from "./TextHead";
import MiniBoxPho from "./MiniBoxPho";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";
import { photos } from "../../shared/photos";

const Pho = () => {
  const hori = photos
    .filter((el) => {
      return el.id === 0;
    })
    .map((ml) => {
      return ml.horizontal;
    });
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
        <Box className="pl-8 pt-[8rem] pr-8">
          <TextHead text="Photography" />
          <Box className="flex md:flex-row flex-col mt-[5rem] justify-center md:gap-x-[2rem]">
            <Box
              className="overflow-hidden mb-5 cursor-pointer transition ease-in-out delay-150 hover:shadow-lg hover:scale-105 duration-300 bg-gradient-to-r from-[#a0bef8] to-[#b5f0f0]"
              sx={{
                height: "30rem",
                width: { xs: "100%", md: "35rem" },
                // backgroundColor: "#adccef",
                borderRadius: "2rem",
              }}
            >
              <img
                src={photos
                  .filter((el) => {
                    return el.id === 0;
                  })
                  .map((ml) => {
                    return ml.source;
                  })}
                alt={photos
                  .filter((el) => {
                    return el.id === 0;
                  })
                  .map((ml) => {
                    return ml.name;
                  })}
                style={{
                  transform: hori ? "scale(3)" : "scale(1)",
                }}
              />
            </Box>

            <Box>
              <Box className="flex md:flex-row flex-col md:gap-x-[2rem]">
                {photos
                  .filter((el) => {
                    return el.id > 0 && el.id < 3;
                  })
                  .map((ml) => (
                    <MiniBoxPho source={ml.source} name={ml.name} />
                  ))}
              </Box>
              <Box className="flex md:flex-row flex-col md:gap-x-[2rem]">
                {photos
                  .filter((el) => {
                    return el.id > 2 && el.id < 5;
                  })
                  .map((ml) => (
                    <MiniBoxPho source={ml.source} name={ml.name} />
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="pr-8 pl-8">
        <Link to="/work">
          <SeeAll />
        </Link>
      </Box>
    </>
  );
};

export default Pho;
