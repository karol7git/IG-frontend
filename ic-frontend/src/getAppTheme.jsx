import { alpha } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: "#0C646C",
      light: "#85b1b5",
      dark: "#04282b",
      contrastText: "#021415",
    },
    secondary: {
      main: "#F2A007",
      light: "#f5bc51",
      dark: "#916004",
      contrastText: "#181000",
    },
    grey: {
      main: "#636e72",
      light: "#91999c",
      dark: "#272c2d",
      contrastText: "#c0c5c6",
    },
    divider: alpha("#c0c5c6", 0.3),
    background: {
      default: "#d9d9d9",
      paper: "#5b6b7c",
    },
    text: {
      primary: "#4c5967",
      secondary: "#4c5967",
    },
    action: {
      selected: `${alpha("#6da2a6", 0.2)}`,
      light: `${alpha("#F2A007", 0.2)}`,
    },
  },
  typography: {
    fontFamily: ['"Jost", sans-serif'].join(","),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 300,
    },
    h6: {
      fontSize: 19,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 16,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});

export default function getAppTheme(mode) {
  return {
    ...getDesignTokens(mode),
    components: {
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: () => ({
            borderRadius: "10px",
            boxShadow: `0 4px 16px ${alpha("#302001", 0.2)}`,
            "& .Mui-selected": {
              color: "#04282b",
            },
          }),
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: () => ({
            padding: "12px 16px",
            textTransform: "none",
            borderRadius: "10px",
            fontWeight: 600,
          }),
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            boxSizing: "border-box",
            transition: "all 100ms ease-in",
            "&:focus-visible": {
              outline: `3px solid ${alpha("#0C646C", 0.5)}`,
              outlineOffset: "2px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            boxSizing: "border-box",
            boxShadow: "none",
            borderRadius: "9px",
            textTransform: "none",
            fontSize: "20px",
            "&:active": {
              transform: "scale(0.98)",
            },
            ...(ownerState.size === "small" && {
              maxHeight: "32px",
            }),
            ...(ownerState.size === "medium" && {
              height: "40px",
            }),
            ...(ownerState.variant === "contained" &&
              ownerState.color === "primary" && {
                color: "#D9D9D9",
                background: "#F2A007",
                boxShadow: `inset 0 1px ${alpha("#916004", 0.4)}`,
                "&:hover": {
                  background: "#0C646C",
                },
              }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            backgroundColor: "#D9D9D9",
            borderRadius: 10,
            boxShadow: "none",
            transition: "background-color, border, 80ms ease",
            ...(ownerState.variant === "outlined" && {
              background: `linear-gradient(to bottom, #D9D9D9, secondary.light)`,
              "&:hover": {
                borderColor: "#549298",
              },
            }),
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: () => ({
            alignSelf: "center",
            py: 1.5,
            px: 0.5,
            background: `linear-gradient(to bottom right, #F0F7FF, #b6d0d2)`,
            border: "1px solid",
            borderColor: `${alpha("#0C646C", 0.3)}`,
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#0C646C",
            },
            "&:focus-visible": {
              borderColor: "#D9D9D9",
              backgroundColor: "#0C646C",
            },
            "& .MuiChip-label": {
              color: "#0C646C",
            },
            "& .MuiChip-icon": {
              color: "#0C646C",
            },
          }),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: () => ({
            borderColor: `${alpha("#91999c", 0.09)}`,
          }),
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
        styleOverrides: {
          root: ({ theme }) => ({
            color: "#073c40",
            fontWeight: 500,
            position: "relative",
            textDecoration: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              width: 0,
              height: "1px",
              bottom: 0,
              left: 0,
              backgroundColor: "#24737a ",
              opacity: 0.7,
              transition: "width 0.3s ease, opacity 0.3s ease",
            },
            "&:hover::before": {
              width: "100%",
              opacity: 1,
            },
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: () => ({
            backgroundImage: "none",
            backgroundColor: "#F2A007",
          }),
        },
      },

      
    },
  };
}
