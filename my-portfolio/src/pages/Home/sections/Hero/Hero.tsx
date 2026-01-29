import { Grid, Container, Typography, Box, Divider } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { RefObject, useState } from "react"; // Removido useEffect que não estava sendo usado
import Projects from '../../../../components/Projects/Projects';
import i18n from '../../../../../src/public/i18n';
// Removido import React from 'react' pois o Vite já gerencia isso
import translationsEN from '../../../../../src/public/locales/en/translation.json';
import translationsPT from '../../../../../src/public/locales/pt/translation.json';

interface HeroProps {
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    // Adicionado estas duas para bater com o que o seu Home.tsx está enviando
    toggleLanguage?: () => void; 
    lang?: string;
}

const Hero = ({ aboutRef, skillsRef, projectsRef }: HeroProps) => {
    const [lang, setLang] = useState(i18n.language || 'pt');

    const handleToggleLanguage = () => {
        const newLang = lang === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang).then(() => {
            setLang(newLang);
        });
    };

    const translations = lang === 'en' ? translationsEN : translationsPT;

    return (
        <Box sx={{ backgroundColor: "background.default", color: "text.primary" }}>
            <Box sx={{ 
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
                                <Grid item>
                                    <StyledButton onClick={handleToggleLanguage}>
                                        🌐 {lang === 'en' ? "Português" : "English"}
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box ref={aboutRef} sx={{ py: 15, backgroundColor: "secondary.main" }}>
                <Container maxWidth="md">
                    <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText' }}>
                        {translations.hero.aboutMe}
                    </Typography>
                    <Typography variant="h5" textAlign="center" paragraph sx={{ lineHeight: 1.8 }}>
                        {translations.hero.introduction}
                    </Typography>
                    <Box display="flex" justifyContent="center" gap={3} mt={4}>
                        <StyledButton onClick={() => window.open("https://www.linkedin.com/in/gabriel-caetano-7a454b149/", "_blank")}>LinkedIn</StyledButton>
                        <StyledButton onClick={() => window.open("https://github.com/GabrielCaetanoo", "_blank")}>GitHub</StyledButton>
                    </Box>
                </Container>
            </Box>

            <Box ref={skillsRef} sx={{ py: 15 }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText' }}>
                        {translations.hero.mySkills}
                    </Typography>
                    <Grid container spacing={6} justifyContent="center" sx={{ mt: 4 }}>
                        {[
                            { name: 'React', icon: 'devicon-react-original' },
                            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
                            { name: 'Next.js', icon: 'devicon-nextjs-original' },
                            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
                            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                            { name: 'Docker', icon: 'devicon-docker-plain' },
                        ].map((skill) => (
                            <Grid item key={skill.name}>
                                <Box sx={{ 
                                    textAlign: 'center', 
                                    '&:hover i': { color: theme.palette.primary.contrastText, transform: 'scale(1.1)' } 
                                }}>
                                    <i className={`${skill.icon} colored`} style={{ fontSize: "4rem", transition: '0.3s' }}></i>
                                    <Typography sx={{ mt: 1, fontWeight: 500 }}>{skill.name}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Divider sx={{ borderColor: 'rgba(100, 255, 218, 0.1)' }} />

            <Box ref={projectsRef} sx={{ py: 10 }}>
                <Projects translations={{
                    projectsTitle: translations.hero.projectsTitle,
                    viewOnGithub: translations.hero.viewOnGithub
                }} />
            </Box>
        </Box>
    );
};

export default Hero;