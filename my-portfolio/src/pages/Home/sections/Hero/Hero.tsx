import { Grid, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import translationsEN from '../../../../../src/public/locales/en/translation.json';
import translationsPT from '../../../../../src/public/locales/pt/translation.json';

interface HeroProps {
    lang: string;
}

const Hero = ({ lang }: HeroProps) => {
    const translations = lang === 'en' ? translationsEN : translationsPT;

    return (
        <Box sx={{ 
            backgroundColor: "background.default", 
            color: "text.primary",
            height: "100vh", 
            display: "flex", 
            alignItems: "center", 
            position: 'relative', 
            overflow: 'hidden' 
        }}>
            <AnimatedBackground />
            <Container maxWidth="lg" sx={{ zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={5} textAlign="center">
                        <Box sx={{ position: "relative", display: 'inline-block' }}>
                            <img 
                                src={Avatar} 
                                alt="Gabriel Caetano"
                                style={{ 
                                    width: "300px", 
                                    height: "300px",
                                    borderRadius: "50%", 
                                    border: `4px solid ${theme.palette.primary.contrastText}`,
                                    objectFit: 'cover',
                                    boxShadow: `0 0 20px ${theme.palette.primary.contrastText}44`
                                }} 
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h1" sx={{ color: "text.primary", mb: 1 }}>
                            {translations.hero.name}
                        </Typography>
                        <Typography variant="h2" sx={{ mb: 4, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
                            {translations.hero.title}
                        </Typography>
                        
                        <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                            <Grid item>
                                <StyledButton onClick={() => {
                                    const resumeUrl = lang === 'pt' 
                                        ? "https://drive.google.com/file/d/1tlH3a-1RBL6hyIfHn-nQlBzlUgGYEGYn/view?usp=drive_link" 
                                        : "https://drive.google.com/file/d/1gVqtR1GMMZI0TxvaD3IXUPYlCg5rrJI2/view?usp=drive_link";
                                    window.open(resumeUrl, "_blank");
                                }}>
                                    <DownloadIcon sx={{ mr: 1 }} />
                                    {translations.hero.downloadCV}
                                </StyledButton>
                            </Grid>
                            <Grid item>
                                <StyledButton onClick={() => window.location.href = "mailto:gabrielc0202@hotmail.com"}>
                                    <EmailIcon sx={{ mr: 1 }} />
                                    {translations.hero.contact}
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;