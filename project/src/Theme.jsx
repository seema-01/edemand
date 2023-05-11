import { ThemeProvider, createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2560fc",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      paper: "#f2f1f6", // Set the color of the paper background
      box: "white",
      card: "white",
      addressBox: "#FAF1EB",
      input: "#3d3f48"
    },
    color: {
      navLink: "black",
      logo: "blue",
      // inputTag: "black"
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2560fc",
    },
    secondary: {
      main: "#343f53",
    },
    background: {
      paper: "#041C32", // Set the color of the paper background
      box: "#041C32",
      addressBox: "#343F53",
      card: "#343f53",
      input: "#3d3f48"
    },
    color: {
      navLink: "white",
      logo: "white",
      // inputTag: "black",
    },
  },
});

export { darkTheme, lightTheme };
