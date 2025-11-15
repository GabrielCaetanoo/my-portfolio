import { Grid, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { RefObject } from "react";
import Projects from '../../../../components/Projects/Projects';
import i18n from '../../../../../src/public/i18n';
import React from 'react';
import translationsEN from '../../../../../src/public/locales/en/translation.json';
import translationsPT from '../../../../../src/public/locales/pt/translation.json';

interface HeroProps {
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
    toggleLanguage: () => void;
    lang: string;
}

const Hero = ({ aboutRef, skillsRef, projectsRef }: HeroProps) => {
    const [lang, setLang] = React.useState('en');

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang).then(() => {
            console.log("Linguagem alterada para:", newLang);
            setLang(newLang);
        });
    };

    const translations = lang === 'en' ? translationsEN : translationsPT;

    return (
        <>
            <div style={{
                backgroundColor: theme.palette.primary.main,
                height: "100vh",
                display: "flex",
                alignItems: "center",
                position: 'relative',
                overflow: 'hidden',
                paddingTop: "50px"
            }}>
                <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={-1} />
                <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                                <AnimatedBackground />
                                <img src={Avatar} style={{ width: "95%", borderRadius: "50%", border: `1px solid ${theme.palette.primary.contrastText}` }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                                {translations.hero.name}
                            </Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">
                                {translations.hero.title}
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    
                                    {/* BOTÃO DE DOWNLOAD ATUALIZADO PARA GOOGLE DRIVE */}
                                    <StyledButton onClick={() => {
                                        // Seleciona o link baseado no idioma atual
                                        const resumeUrl = lang === 'pt' 
                                            ? "https://drive.google.com/file/d/14cLg7wnggh1V7uM9n3CcXd1PK-I9dwDH/view?usp=sharing" 
                                            : "https://drive.google.com/file/d/1XSWARaNiE7fx94i1BO8dLFNL9QD4mOVL/view?usp=sharing";
                                        
                                        // Abre em uma nova aba
                                        window.open(resumeUrl, "_blank");
                                    }}>
                                        <DownloadIcon />
                                        <Typography>{translations.hero.downloadCV}</Typography>
                                    </StyledButton>

                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => { window.location.href = "mailto:gabrielc0202@hotmail.com" }}>
                                        <EmailIcon />
                                        <Typography>{translations.hero.contact}</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={toggleLanguage}>
                                        🌐 {lang === 'en' ? translations.hero.languageToggle.toPortuguese : translations.hero.languageToggle.toEnglish}
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div style={{
                borderBottom: "10px solid rgba(255, 255, 255, 0.3)",
                margin: "10px 0",
            }} />

            <div ref={aboutRef} style={{
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: 'relative',
                overflow: 'hidden',
                padding: theme.spacing(10),
                margin: theme.spacing(5, 0),
                minHeight: "100vh",
            }}>
                <Container maxWidth="lg">
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">
                        {translations.hero.aboutMe}
                    </Typography>
                    <Typography color="primary.contrastText" variant="h5" textAlign="center" paragraph>
                        {translations.hero.introduction}
                    </Typography>
                    <Typography color="primary.contrastText" variant="h6" textAlign="center" paragraph>
                        {translations.hero.projects}
                    </Typography>
                    <Grid container justifyContent="center" spacing={2} sx={{ pt: 3 }}>
                        <Grid item>
                            <StyledButton onClick={() => window.open("https://www.linkedin.com/in/gabriel-caetano-7a454b149/", "_blank")}>
                                {translations.hero.linkedin}
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton onClick={() => window.open("https://github.com/GabrielCaetanoo", "_blank")}>
                                {translations.hero.github}
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div style={{
                borderBottom: "10px solid rgba(255, 255, 255, 0.3)",
                margin: "10px 0",
            }} />

            <div ref={skillsRef} style={{
                backgroundColor: theme.palette.primary.main,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: 'relative',
                overflow: 'hidden',
                padding: theme.spacing(13),
                margin: theme.spacing(5, 0),
            }}>
                <Container maxWidth="lg">
                    <Typography color="primary.contrastText" variant="h1" textAlign="center" gutterBottom>
                        {translations.hero.mySkills}
                    </Typography>
                    <Typography color="primary.contrastText" variant="h5" textAlign="center" paragraph>
                        {translations.hero.skillsIntro}
                    </Typography>
                    <Grid container spacing={5} justifyContent="center" sx={{ pt: 5 }}>
                        {/* Ícones das tecnologias */}
                        <Grid item>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <i className="devicon-react-original colored" style={{ fontSize: "3rem" }}></i>
                                <Typography color="primary.contrastText">React</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <i className="devicon-typescript-plain colored" style={{ fontSize: "3rem" }}></i>
                                <Typography color="primary.contrastText">TypeScript</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <i className="devicon-javascript-plain colored" style={{ fontSize: "3rem" }}></i>
                                <Typography color="primary.contrastText">JavaScript</Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <i className="devicon-cplusplus-plain colored" style={{ fontSize: "3rem" }}></i>
                                <Typography color="primary.contrastText">C++</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div style={{
                borderBottom: "10px solid rgba(255, 255, 255, 0.3)",
                margin: "10px 0",
            }} />

            <div ref={projectsRef} style={{
                padding: theme.spacing(4, 0),
            }}>
                <Projects translations={{
                    projectsTitle: translations.hero.projectsTitle,
                    viewOnGithub: translations.hero.viewOnGithub
                }} />
            </div>

            <div style={{
                borderBottom: "10px solid rgba(255, 255, 255, 0.3)",
                margin: "10px 0",
            }} />
        </>
    );
};

export default Hero;