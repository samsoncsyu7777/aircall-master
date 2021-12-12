import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: '"Nunito"',
    fontSize: 14,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,      
    },
    h3: {
      fontSize: 26,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
    h7: {
      fontSize: 16,
    },
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 12,
    },    
  },
  palette: {
    background: { default: "#FFFFFF" },
    text: { primary: "#000000", secondary: "#AAAAAA" },
    disabled: { main: "#E6E6E6", dark: "#AAAAAA", darkGrey: "#777777", light: "#CCCCCC" },
    action: { active: "#00CC00", click: "#009900" },
    transparent: { main: "rgb(0, 0, 0, 0)" },
    error: { main: "#FF0000" },
  },
});
