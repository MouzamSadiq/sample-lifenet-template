import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { theme } from "./theme";

export const customMuiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
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
    fontFamily: '"Public Sans",sans-serif',
    allVariants: {
      color: theme.colors.text,
    },

    h1: {
      fontWeight: 600,
      fontSize: "22px",
      color: "#293e51",
      alignContent: "start",
    },
    h2: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "white",
      fontFamily: `"Poppins"`,
    },
    h3: {
      fontSize: "10px",
      fontFamily: `"Poppins"`,
    },

    h4: {
      fontWeight: "bold",
      fontFamily: "Poppins",
      fontSize: "15px",
      color: "black",
    },
    h5: {
      fontFamily: "Poppins",
      fontSize: "14px",
      color: "gray",
    },
    h6: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
    },

    body1: {
      // fontWeight: "bold",
      fontSize: "20px",
      fontFamily: "Poppins",
      color: "#293e51",
    },
    body2: {
      fontWeight: 500,
      fontSize: "16px",
    },
    caption: {
      fontWeight: 700,
      fontSize: "16px",
      color: "#4E4F55",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          minWidth: 0,
          borderRadius: 0,
          fontSize: "1rem",
          fontWeight: "500",
          borderWidth: "2px",
          textTransform: "none",
          "&:hover": {
            borderWidth: "1px",
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
