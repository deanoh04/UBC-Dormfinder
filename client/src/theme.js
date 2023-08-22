import { createTheme } from "@mui/material/styles";


export const themeSettings = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          dark: '#99EEFD',
          main: '#00D5FA',
          light: '#00353F',
        },
        neutral: {
          dark: '#E0E0E0',
          main: '#C2C2C2',
          mediumMain: '#A3A3A3',
          medium: '#858585',
          light: '#333333',
        },
        background: {
          default: '#0A0A0A',
          alt: '#1A1A1A',
        },
      },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  });

export default themeSettings
