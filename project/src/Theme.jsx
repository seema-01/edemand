import React, { useState } from 'react'
import { Button } from "@mui/material";
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


// export const Theme = () => {
  
//     const [darkMode, setDarkMode] = useState(false);

//     const handleToggleDarkMode = () => {
//       setDarkMode(!darkMode);
//     };
//     return (
//     <div>
//         <Button onClick={handleToggleDarkMode}>Toggle mode</Button>
//         <ThemeProvider.myTheme theme={darkMode ? darkTheme : lightTheme}>
            
//         </ThemeProvider.myTheme>
//     </div>
//   )
// }


export { darkTheme, lightTheme };