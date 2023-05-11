import { createTheme } from "@mui/material/styles";

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
        paper: '#f2f1f6', // Set the color of the paper background
        container: "#f2f1f6",
        box: 'white',
        appbar: 'red'
    },
    color: {
        navLink : "black",
        logo: "blue"
    }
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
        paper: 'black', // Set the color of the paper background
        box: '#323232'
    },
    color: {
        navLink : "white",
        logo: "white"
    }
  },
});

export { darkTheme, lightTheme };
