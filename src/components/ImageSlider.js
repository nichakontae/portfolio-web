import React, { useState } from "react";
import { photos } from "../shared/photos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";

const ImageSlider = ({ photoLength }) => {
  const [current, setCurrent] = useState(0);
  const length = photoLength.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(photoLength) || photoLength.length <= 0) {
    return null;
  }
  return (
    <Box className="slider">
      <ArrowBackIosIcon className="left" onClick={prevSlide} />
      <ArrowForwardIosIcon className="right" onClick={nextSlide} />
      {photos.map((slide) => {
        return (
          <Box
            key={slide.id}
            className={slide.id === current ? "slide active" : "slide"}
          >
            {slide.id === current && (
              <img src={slide.source} alt="my photo" className="image" />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default ImageSlider;
