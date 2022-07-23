import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Project from "./pages/Project";
import Photography from "./pages/Photography/Photography";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import PhotoPost from "./components/PhotoPost";
import ImageSlider from "./components/ImageSlider";
import { photos } from "./shared/photos";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState(null);
  const [selectProject, setSelectedProject] = useState(null);
  const onPhotoCloseClick = () => {
    setSelectPhoto(null);
  };
  const onPhotoClick = (photo) => {
    setSelectPhoto(photo);
  };
  const onProjectClick = (proId) => {
    setSelectedProject(proId);
  };
  let photoPost = null;
  if (!!selectPhoto) {
    photoPost = <PhotoPost photo={selectPhoto} onBgClick={onPhotoCloseClick} />;
  }

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
    <div className="app">
      <ThemeProvider theme={theme}>
        <Navbar onLogoClick={scrollToTop} />
        {/* <ImageSlider photoLength={photos} /> */}
        {photoPost}
        <Routes>
          <Route
            path="/"
            element={
              <Home onPhotoClick={onPhotoClick} onButtonClick={scrollToTop} />
              // <ProjectDetail />
            }
          />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/work" element={<Work />} /> */}
          <Route exact path="/project" element={<Project />} />
          <Route path="/project/:url" element={<ProjectDetail />} />
          <Route
            exact
            path="/photography"
            element={<Photography onPhotoClick={onPhotoClick} />}
          />
        </Routes>
        <Footer />
        {showButton && (
          <Box
            onClick={scrollToTop}
            className="back-to-top"
            sx={{ width: "3rem", height: "3rem" }}
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
          </Box>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
