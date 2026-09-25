import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#0B6BDC",
      dark: "#074A9F",
      light: "#E7F1FC",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0CA8CF",
      dark: "#087A99",
      light: "#E8F7FA",
      contrastText: "#061A3A",
    },
    background: {
      default: "#F5F8FB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#071A3A",
      secondary: "#536579",
      disabled: "#8C9AAA",
    },
    divider: "#DFE7EF",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily:
      '"Avenir Next", Avenir, "Segoe UI", Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 650,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontWeight: 650,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 650,
      letterSpacing: "-0.025em",
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.01em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFeatureSettings: '"kern" 1, "liga" 1',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        enterDelay: 450,
      },
      styleOverrides: {
        tooltip: {
          padding: "7px 10px",
          borderRadius: 8,
          backgroundColor: "#071A3A",
          fontSize: "0.75rem",
          fontWeight: 600,
        },
        arrow: {
          color: "#071A3A",
        },
      },
    },
  },
});
