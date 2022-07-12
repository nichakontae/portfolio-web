import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  const font = "'Montserrat', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        {/* <Pho /> */}
      </Routes>
      {showButton && (
        <Box
          onClick={scrollToTop}
          className="back-to-top flex flex-row justify-center cursor-pointer gap-x-[1rem]"
          sx={{ width: "100vw" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <Typography>BACK TO TOP</Typography>
        </Box>
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
