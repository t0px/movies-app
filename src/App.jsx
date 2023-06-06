import { useEffect, useRef, useState } from "react";
import MovieCard from "./components/MovieCard";
import { Box, ThemeProvider, CssBaseline, Paper } from "@mui/material";
import Navbar from "./components/Navbar";
import "./css/default.css";
import Content from "./components/Content";
import { gsap, Power3 } from "gsap";
import lightTheme from "../lightTheme";
import darkTheme from "../darkTheme";
import { createTheme } from "@mui/material";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const tl = new gsap.timeline();
  const ease = Power3.easeOut;

  //Input REF
  const inputField = useRef(null);
  const [errorMsg, setErrorMsg] = useState("Results will show here.");

  //State of movies list
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline>
        <Paper
          sx={{
            background: currentTheme.palette.bgColor.gradient,
            backgroundColor: currentTheme.palette.bgColor.mask,
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "75vw" }} m={5}>
              <Navbar
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
                inputField={inputField}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                movies={movies}
                setMovies={setMovies}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
              <Content
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
                movies={movies}
                setMovies={setMovies}
                timeline={tl}
                ease={ease}
              />
            </Box>
          </Box>
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
