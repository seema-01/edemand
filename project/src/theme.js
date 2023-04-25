// import { createContext , useState, useMemo  } from "react";
// import { createTheme } from "@mui/material/styles";
// import { ColorLens, Palette } from "@mui/icons-material";

// //color design tokens
// //Light mode
// export const tokens = (mode) => ({
//     ...(mode === 'dark'
//     ? { 
//         //Dark mode
//         primary: {
//             100: "#cdd4d8",
//             200: "#9ba9b0",
//             300: "#687f89",
//             400: "#365461",
//             500: "#04293a",
//             600: "#03212e",
//             700: "#021923",
//             800: "#021017",
//             900: "#01080c"
//         },
//         secondary: {
//             100: "#cdd2d6",
//             200: "#9ba4ad",
//             300: "#687784",
//             400: "#36495b",
//             500: "#041c32",
//             600: "#031628",
//             700: "#02111e",
//             800: "#020b14",
//             900: "#01060a"
//         },
//         green: {
//             100: "#d6f3e5",
//             200: "#aee8cb",
//             300: "#85dcb1",
//             400: "#5dd197",
//             500: "#34c57d",
//             600: "#2a9e64",
//             700: "#1f764b",
//             800: "#154f32",
//             900: "#0a2719"
//         },
//         indigo: {
//             100: "#d3dffe",
//             200: "#a8bffe",
//             300: "#7ca0fd",
//             400: "#5180fd",
//             500: "#2560fc",
//             600: "#1e4dca",
//             700: "#163a97",
//             800: "#0f2665",
//             900: "#071332"
//         },
//         gray: {
//             100: "#d6d9dd",
//             200: "#aeb2ba",
//             300: "#858c98",
//             400: "#5d6575",
//             500: "#343f53",
//             600: "#2a3242",
//             700: "#1f2632",
//             800: "#151921",
//             900: "#0a0d11"
//         },
//     } : {
//         primary: {
//             900: "#01080c",
//             800: "#021017",
//             700: "#021923",
//             600: "#03212e",
//             500: "#04293a",
//             400: "#365461",
//             300: "#687f89",
//             200: "#9ba9b0",
//             100: "#cdd4d8"
//         },
//         // secondary: {
//         //     100: "#cdd2d6",
//         //     200: "#9ba4ad",
//         //     300: "#687784",
//         //     400: "#36495b",
//         //     500: "#041c32",
//         //     600: "#031628",
//         //     700: "#02111e",
//         //     800: "#020b14",
//         //     900: "#01060a"
//         // },
//         // green: {
//         //     100: "#d6f3e5",
//         //     200: "#aee8cb",
//         //     300: "#85dcb1",
//         //     400: "#5dd197",
//         //     500: "#34c57d",
//         //     600: "#2a9e64",
//         //     700: "#1f764b",
//         //     800: "#154f32",
//         //     900: "#0a2719"
//         // },
//         // indigo: {
//         //     100: "#d3dffe",
//         //     200: "#a8bffe",
//         //     300: "#7ca0fd",
//         //     400: "#5180fd",
//         //     500: "#2560fc",
//         //     600: "#1e4dca",
//         //     700: "#163a97",
//         //     800: "#0f2665",
//         //     900: "#071332"
//         // },
//         // gray: {
//         //     100: "#d6d9dd",
//         //     200: "#aeb2ba",
//         //     300: "#858c98",
//         //     400: "#5d6575",
//         //     500: "#343f53",
//         //     600: "#2a3242",
//         //     700: "#1f2632",
//         //     800: "#151921",
//         //     900: "#0a0d11"
//         // },
//     }
//     )
// })


// //mui theme setting
// export const themeSetting =  (mode) => {
//     const colors = tokens(mode);

//     return{
//         palettes:{
//             mode:mode,
//             ...(mode === 'dark'
//                 ? {
//                     primary:{
//                         main: colors.primary[500]
//                     },
//                     secondary:{
//                         main:colors.secondary[500]
//                     },
//                     neutral: {
//                         dark:colors.gray[700],
//                         main:colors.gray[500],
//                         light:colors.gray[100]
//                     },
//                     background: {
//                         default: colors.primary[500]
//                     }
//                 }
//                 : {
//                     primary:{
//                         main: colors.primary[100]
//                     },
//                     secondary:{
//                         main:colors.secondary[500]
//                     },
//                     neutral: {
//                         dark:colors.gray[700],
//                         main:colors.gray[500],
//                         light:colors.gray[100]
//                     },
//                     background: {
//                         default: "white"
//                     }
//                 }
//             ) 
//         },
//         typography : {
//             fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//             fontSize: 12,
//             h1: {
//                 fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//                 fontSize: 40,
//             },
//             h2: {
//                 fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//                 fontSize: 32,
//             },
//             h3: {
//                 fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//                 fontSize: 24,
//             },
//             h4: {
//                 fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//                 fontSize: 20,
//             },
//             h5: {
//                 fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//                 fontSize: 16,
//             },
//             h6: {
//                 fontFamily: ["Source Sans Pro","sans-serif"].join(","),
//                 fontSize: 14,
//             }

//         }
//     };
// };

// //context for color mode
// export const colorModeContext = createContext({
//     toggleColorMode : () => {

//     }
// })

// export const useMode  = () => {
//     const [mode, setMode] = useState("dark")

//     const colorMode = useMemo(
//         ()=>({
//             toggleColorMode: () => 
//             setMode((prev) => (prev === "light"  ?  "dark"  : "light"))
//         }),
//         []
//     );

//     const theme = useMemo(() => createTheme(themeSetting(mode)),[mode])

//     return [theme, colorMode]
// }

// import { createMuiTheme } from "@mui/material";
// import {}