import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

export { darkTheme, lightTheme };
