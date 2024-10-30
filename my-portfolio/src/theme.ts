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
        },
        background: {
            default: '#729762', // Adicione uma cor de fundo padrão aqui
        },
    },
    typography: {
        fontFamily: '"Poppins", Cambria, sans-serif'
    }
});

theme = responsiveFontSizes(theme);

export default theme;
