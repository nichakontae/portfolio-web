import { Box, Stack, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Fig from "../pages/Fig";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = (onLogoClick) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [toggle, setToggle] = useState(false);

  const click = () => {
    setToggle(!toggle);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  const showToggle = (el) => {
    if (el === true) {
      return (
        // cancel icon
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    } else {
      return (
        // menu icon
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
    }
  };
  const CustomLink = ({ to, children, ...props }) => {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
    return (
      <Link
        to={to}
        onClick={() => {
          onLogoClick();
          closeMenu();
        }}
        {...props}
      >
        <Typography
          className={isActive ? "p-4 nav-link nav-active" : "p-4 nav-link"}
        >
          {children}
        </Typography>
      </Link>
    );
  };
  return (
    <Box
      className="fixed"
      sx={{
        width: "100%",
        height: "60px",
        padding: "0rem calc((100vw - 1700px) / 2)",
        // background: "#3378ff",
        // backdropFilter: "blur(1rem)",
        backgroundColor: "#f7f7f7",
        zIndex: "100",
        // color: "white",
      }}
    >
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Link to="/" onClick={onLogoClick}>
            <img
              src="assets/images/logo.png"
              alt="ivelse"
              className="pl-8"
              onClick={closeMenu}
              style={{ height: "55px" }}
            />
            {/* <Typography className="pl-8" variant="h4" onClick={closeMenu}>
              ivelse.
            </Typography> */}
          </Link>
          <Box className="px-8 cursor-pointer md:hidden" onClick={click}>
            {showToggle(toggle)}
            {/* <Box className={toggle ? "menu active" : "menu"}></Box> */}
          </Box>
          <Box className={toggle ? "menu active" : "menu"}>
            {/* <Stack direction="row"> */}
            {/* <Link to="/work" onClick={closeMenu}>
              <Typography className="p-4 nav-link">Work</Typography>
            </Link> */}
            <CustomLink to="/project" children="Project" />
            <CustomLink to="/photography" children="Photography" />
            <CustomLink to="/about" children="About" />

            {/* </Stack> */}
            <Box className="nav-link-mobile">
              <a>
                <EmailIcon className="cursor-pointer icon" />
              </a>
              <a href="https://www.facebook.com/nichakon.e">
                <FacebookIcon className="cursor-pointer icon" />
              </a>
              <a href="https://www.instagram.com/bbeforenseq/">
                <InstagramIcon className="cursor-pointer icon" />
              </a>
              <a href="https://github.com/nichakontae">
                <GitHubIcon className="cursor-pointer icon" />
              </a>
            </Box>
          </Box>

          <Box className="md:block hidden pr-8">
            {/* <Link to="/contact"> */}
            <Typography
              onClick={handleOpen}
              className="cursor-pointer nav-link p-4"
            >
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
                className="bg-[#aad0d9]"
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
                      hello@ivelse.co
                    </Typography>
                  </Box>
                  <Box className="flex gap-x-[5rem] md:relative md:top-[10rem]">
                    <a href="https://www.facebook.com/nichakon.e">
                      <Fig text="facebook" />
                    </a>
                    <a href="https://www.instagram.com/bbeforenseq/">
                      <Fig text="instagram" />
                    </a>
                    <a href="https://github.com/nichakontae">
                      <Fig text="github" />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Modal>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
