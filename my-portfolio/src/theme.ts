import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#729762',
        },
        secondary: {
            main: '#F3F7EC',
        },
        success: {
            main: '#3C3D37',
            contrastText: '#729762',
        }
    },
    typography: {
        fontFamily: "sans-serif"
    }
});

theme = responsiveFontSizes(theme);

export default theme;