import { Grid, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";

// Interface rigorosa para eliminar o erro de 'any'
interface HeroTranslations {
    name: string;
    title: string;
    downloadCV: string;
    contact: string;
    aboutMe: string;
    introduction: string;
    mySkills: string;
    projectsTitle: string;
    viewOnGithub: string;
    languageToggle: string;
}

interface HeroProps {
    translations: HeroTranslations;
    lang: string;
}

const Hero = ({ translations, lang }: HeroProps) => {
    return (
        <Box sx={{ 
            // Gradiente radial para profundidade visual
            background: `radial-gradient(circle at 50% 50%, rgba(10, 25, 47, 0) 0%, rgba(10, 25, 47, 1) 100%), #0A192F`,
            color: "text.primary",
            height: "100vh", 
            display: "flex", 
            alignItems: "center", 
            position: 'relative', 
            overflow: 'hidden',
            // FIX: Força o canvas das partículas a preencher todo o Box
            "& #tsparticles": {
                position: "absolute !important",
                height: "100% !important",
                width: "100% !important",
                top: 0,
                left: 0
            }
        }}>
            {/* CAMADA 0: Fundo Animado (Rede Neural) */}
            <AnimatedBackground />

            {/* CAMADA 1: Conteúdo (zIndex garante que botões sejam clicáveis) */}
            <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={5} textAlign="center">
                        <Box sx={{ position: "relative", display: 'inline-block' }}>
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
                                    boxShadow: `0 0 30px ${theme.palette.primary.contrastText}44`,
                                    transition: "0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.02)",
                                        boxShadow: `0 0 50px ${theme.palette.primary.contrastText}66`
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
                            fontWeight: 700 
                        }}>
                            {translations.name}
                        </Typography>
                        <Typography variant="h2" sx={{ 
                            mb: 4, 
                            fontSize: { xs: '1.2rem', md: '2.2rem' }, 
                            color: "primary.contrastText",
                            fontWeight: 400
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