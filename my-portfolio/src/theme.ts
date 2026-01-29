import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        mode: 'dark', // Ativa o modo escuro global
        primary: {
            main: '#0A192F', // Azul marinho profundo (Fundo principal)
            contrastText: '#64FFDA', // Ciano Neon (Destaque/Links)
        },
        secondary: {
            main: '#112240', // Azul ligeiramente mais claro para cards/seções
            contrastText: '#CCD6F6', // Cinza azulado para textos
        },
        success: {
            main: '#64FFDA',
            contrastText: '#0A192F',
        },
        background: {
            default: '#0A192F', 
            paper: '#112240',
        },
        text: {
            primary: '#CCD6F6',
            secondary: '#8892B0',
        }
    },
    typography: {
        fontFamily: '"Poppins", "Inter", sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 600,
            color: '#64FFDA', // Seu título agora terá o brilho neon
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;