import { Grid, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";

interface HeroTranslations {
    name: string;
    title: string;
    downloadCV: string;
    contact: string;
    aboutMe: string;
    mySkills: string;
    projectsTitle: string;
    languageToggle: string;
}

interface HeroProps {
    translations: HeroTranslations;
    lang: string;
}

const Hero = ({ translations, lang }: HeroProps) => {
    return (
        <Box sx={{ 
            backgroundColor: "#0A192F",
            height: "100vh", 
            display: "flex", 
            alignItems: "center", 
            position: 'relative', 
            overflow: 'hidden',
            // CAMADA 1: Gradiente de Fundo Principal
            background: `radial-gradient(circle at 50% 50%, rgba(10, 25, 47, 0) 0%, rgba(10, 25, 47, 1) 100%), #0A192F`,
            
            // CAMADA 2: Efeito Nebula (Brilhos de luz sutis no fundo)
            "&::before": {
                content: '""',
                position: 'absolute',
                width: '600px',
                height: '600px',
                top: '-10%',
                right: '-5%',
                background: 'radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, rgba(10, 25, 47, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                zIndex: 0,
            },
            "&::after": {
                content: '""',
                position: 'absolute',
                width: '500px',
                height: '500px',
                bottom: '10%',
                left: '-5%',
                background: 'radial-gradient(circle, rgba(100, 255, 218, 0.03) 0%, rgba(10, 25, 47, 0) 70%)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: 0,
            }
        }}>
            {/* CAMADA 3: Grade de Pontos Fixa */}
            <Box sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(#112240 1.5px, transparent 1.5px)`,
                backgroundSize: '45px 45px',
                opacity: 0.4,
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={5} textAlign="center">
                        <Box sx={{ position: "relative", display: 'inline-block' }}>
                            {/* Efeito de anel luminoso atrás do avatar */}
                            <Box sx={{
                                position: 'absolute',
                                inset: -15,
                                background: 'radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, transparent 70%)',
                                borderRadius: '50%',
                                zIndex: -1
                            }} />
                            <Box
                                component="img"
                                src={Avatar} 
                                alt="Gabriel Caetano - AI & LLM Specialist"
                                sx={{ 
                                    width: { xs: "250px", md: "350px" },
                                    height: { xs: "250px", md: "350px" },
                                    borderRadius: "50%", 
                                    border: `4px solid ${theme.palette.primary.contrastText}`,
                                    objectFit: 'cover',
                                    boxShadow: `0 0 30px ${theme.palette.primary.contrastText}33`,
                                    transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                    "&:hover": {
                                        transform: "scale(1.03) rotate(2deg)",
                                        boxShadow: `0 0 50px ${theme.palette.primary.contrastText}55`
                                    }
                                }} 
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7} textAlign={{ xs: 'center', md: 'left' }}>
                        <Typography variant="h1" sx={{ 
                            color: "text.primary", 
                            mb: 1, 
                            fontSize: { xs: '2.5rem', md: '4.5rem' },
                            fontWeight: 700,
                            letterSpacing: '-1px'
                        }}>
                            {translations.name}
                        </Typography>
                        <Typography variant="h2" sx={{ 
                            mb: 4, 
                            fontSize: { xs: '1.2rem', md: '2.2rem' }, 
                            color: "primary.contrastText",
                            fontWeight: 400,
                            opacity: 0.9
                        }}>
                            {translations.title}
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
                                    {translations.downloadCV}
                                </StyledButton>
                            </Grid>
                            <Grid item>
                                <StyledButton onClick={() => window.location.href = "mailto:gabrielc0202@hotmail.com"}>
                                    <EmailIcon sx={{ mr: 1 }} />
                                    {translations.contact}
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