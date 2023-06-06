
import { createTheme } from "@mui/material";


const darkTheme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    navItem: {
      fontSize: 16,
    },
    navLogo: {
      fontSize: 24,
      fontWeight: 400,
      color: "#fff",
    },
    movieTitle: {
      fontSize: 18,
      fontWeight: 500,
    },
    movieYear: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  palette: {
    mode: "dark",
    textColor: {
      main: "#E0E0E0",
      default: "#07070d",
    },
    bgColor: {
      main: "#0d0d14",
      gradient:
        "radial-gradient(circle, rgba(83,83,83,1) 0%, rgba(24,24,24,1) 100%)",
      mask: "rgb(172,235,255)",
    },
    btnColor: {
      main: "#242440",
    },
    shadows: {
      big: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      small: "0 5px 65px 0 rgba(0, 0, 0, 0.35)",
    },
    defaults: {
      primary: "#07070d",
      secondary: "#E0E0E0",
    },
  },
});

export default darkTheme;
