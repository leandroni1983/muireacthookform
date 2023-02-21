import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
        main: "#7286D3"
    },
    secondary: {
        main: "#E5E0FF"
    },
    typography: {
      fontFamily: "Roboto",
      fontSize: 15,
    },
    action:{
      focus: "#E73009"
    }
  }
});
