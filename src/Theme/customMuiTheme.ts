import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { theme } from "./Theme";

export const customMuiTheme = createTheme({
  palette: {
    primary: {
      main: "#2984B9",
    },
    secondary: {
      main: green[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1366,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: `"Poppins",  sans-serif`,
    allVariants: {
      color: theme.colors.text,
    },

    h1: {
      fontSize: "50px",
      fontWeight: "bold",
      color: "#27285C",
    },
    h2: {
      fontSize: "16px",
      color: "#27285C",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "22px",
      color: "black",
    },

    h4: {
      fontSize: "14px",
      color: "#27445C",
      // fontWeight: "bold",
    },
    h5: {
      fontSize: "14px",
    },
    h6: {
      fontSize: "15px",
      fontWeight: "bold",
      color: "#a2ad00",
    },

    body1: {
      fontWeight: 400,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 500,
      fontSize: "16px",
    },
    caption: {
      fontWeight: 500,
      fontSize: "14px",
      color: "white",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          fontWeight: "500",
          borderWidth: "2px",
          textTransform: "none",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
