import React from "react";
import { photos } from "../../shared/photos";
import BoxForWork from "../../components/BoxForWork";
import { Box, Typography } from "@mui/material";

const Photography = ({ onPhotoClick }) => {
  // const [selectPhoto, setSelectPhoto] = useState(null);

  // const onPhotoCloseClick = () => {
  //   setSelectPhoto(null);
  // };
  // const onPhotoClick = (photo) => {
  //   setSelectPhoto(photo);
  // };

  // let photoPost = null;
  // if (!!selectPhoto) {
  //   photoPost = <PhotoPost photo={selectPhoto} onBgClick={onPhotoCloseClick} />;
  // }

  return (
    <>
      <Box
        sx={{
          //   height: { xs: "100% ", lg: "100vh" },
          width: "100%",
          padding: "0rem calc((100vw - 1700px) / 2)",
          // backgroundColor: "#fff",
        }}
      >
        <Box className="pl-8 pt-[8rem] pr-8">
          <Typography variant="h3" sx={{ color: "black" }}>
            Photography
          </Typography>
          <hr
            className="mt-3"
            style={{ border: "2px solid #2958b7", width: "7rem" }}
          />
        </Box>
      </Box>
      <Box className="pl-8 pt-5 pr-8 mb-[5rem] flex flex-col justify-center items-center">
        <Box className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-x-[3rem] gap-y-[3rem] ">
          {photos.map((ml) => (
            <BoxForWork key={ml.id} photo={ml} onPhotoClick={onPhotoClick} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Photography;
