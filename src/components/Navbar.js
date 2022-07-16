import { Box, Stack, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fig from "../pages/Fig";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [toggle, setToggle] = useState(true);

  const click = () => {
    setToggle(!toggle);
  };
  const showToggle = (el) => {
    if (el === true) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  };

  return (
    <Box
      className="fixed"
      sx={{
        width: "100%",
        height: "60px",
        padding: "0rem calc((100vw - 1700px) / 2)",
        background: "transparent",
        backdropFilter: "blur(1rem)",
        zIndex: "100",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Link to="/">
          <Typography className="pl-8" variant="h4">
            nnch.
          </Typography>
        </Link>
        <Box className="px-8 cursor-pointer md:hidden" onClick={click}>
          {showToggle(toggle)}
        </Box>
        <Box className="md:block hidden">
          <Stack direction="row">
            <Link to="/work">
              <Typography className="p-4">Work</Typography>
            </Link>
            <Link to="/project">
              <Typography className="p-4">Project</Typography>
            </Link>
            <Link to="/photography">
              <Typography className="p-4">Photography</Typography>
            </Link>
            <Link to="/about">
              <Typography className="p-4">About</Typography>
            </Link>
          </Stack>
        </Box>
        <Box className="md:block hidden pr-8">
          {/* <Link to="/contact"> */}
          <Typography onClick={handleOpen} className="cursor-pointer">
            Contact
          </Typography>
          {/* </Link> */}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              className="bg-gradient-to-r from-[#3378ff] to-[#9442fe]"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "95%",
                height: "90%",

                // boxShadow: 10,
                p: 4,
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <CloseIcon
                onClick={handleClose}
                className="cursor-pointer absolute right-10 z-10"
              />

              <Box
                className="flex flex-col justify-center items-center gap-y-[3rem] md:relative md:top-[-1rem]"
                sx={{ height: "100%" }}
              >
                <Box className="flex flex-col items-center">
                  <Typography>contact</Typography>
                  <Typography
                    variant="h1"
                    className="cursor-pointer transition ease-in-out delay-100 no-underline hover:text-white hover:underline duration-300"
                  >
                    hello@nnch.co
                  </Typography>
                </Box>
                <Box className="flex gap-x-[5rem] md:relative md:top-[10rem]">
                  <Fig text="facebook" />
                  <Fig text="instagram" />
                  <Fig text="github" />
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
