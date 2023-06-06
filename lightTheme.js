
import { createTheme } from "@mui/material";


const lightTheme = createTheme({
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
    mode: "light",
    textColor: {
      main: "#07070d",
      default: "#07070d",
    },
    bgColor: {
      main: "#ebebff",
      gradient:
        "radial-gradient(circle, rgba(172,235,255,1) 0%, rgba(40,167,255,1) 100%)",
      mask: "rgb(172,235,255)",
    },
    btnColor: {
      main: "#b5b5ff",
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

export default lightTheme;
