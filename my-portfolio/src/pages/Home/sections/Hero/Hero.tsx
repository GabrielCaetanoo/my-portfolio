import { Grid, styled, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { RefObject } from "react";
import Projects from '../../../../components/Projects/Projects';

interface HeroProps {
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
}

const Hero = ({ aboutRef, skillsRef, projectsRef}: HeroProps) => {

    const Separator = styled("div")(() => ({
        borderBottom: "10px solid rgba(255, 255, 255, 0.3)", // Altere a cor e espessura conforme necessário
        margin: "10px 0", // Espaçamento acima e abaixo da linha
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: 'relative', 
        overflow: 'hidden',  
        [theme.breakpoints.up('xs')]: { 
            paddingTop: "50px"
        },
        [theme.breakpoints.up('md')]: { 
            paddingTop: "0"
        }
    }));

    const StyledHero2 = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Alinhamento central
        justifyContent: "center", // Centraliza verticalmente
        position: 'relative',
        overflow: 'hidden',
        padding: theme.spacing(10),
        margin: theme.spacing(5, 0), // Margem vertical
        minHeight: "100vh", // Altura mínima
        [theme.breakpoints.up('xs')]: {
            paddingTop: "50px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }
    }));
    

    const StyledImg = styled("img")(() => ({
        width: "95%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));

    return (
        <>
            <StyledHero>
                <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={-1} />
                <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                                <AnimatedBackground/>
                                <StyledImg src={Avatar} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                                Gabriel Caetano
                            </Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">
                                I'm a Software Engineer
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/CV.pdf";  
                                        link.download = "Gabriel_Caetano_CV.pdf";
                                        link.click();
                                    }}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => { window.location.href = "mailto:gabrielc0202@hotmail.com" }}>
                                        <EmailIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
            <Separator /> {/* Linha de separação */}

        {/* Seção "About" */}
            <StyledHero2 ref={aboutRef}>
                <Container maxWidth="lg">
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">
                    About Me
                    </Typography>
                    <Typography color="primary.contrastText" variant="h5" textAlign="center" paragraph>
                    Olá! Sou Gabriel Caetano, desenvolvedor com foco em Front-End e estudante de Engenharia de Software. Estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias. Atualmente, tenho experiência em TypeScript, React, e C++, além de estar desenvolvendo projetos próprios para expandir meus conhecimentos.
                    </Typography>
                    <Typography color="primary.contrastText" variant="h6" textAlign="center" paragraph>
                    Alguns dos meus projetos incluem uma aplicação de simulação MIPS e um sistema de controle de dosagem de medicamentos, onde pude aplicar conceitos de algoritmos e simulação. Meu sonho é um dia abrir minha própria empresa ou alcançar o cargo de Tech Lead, com a liberdade de trabalhar de qualquer lugar do mundo.
                    </Typography>
                <Grid container justifyContent="center" spacing={2} sx={{ pt: 3 }}>
                    <Grid item>
                    <StyledButton onClick={() => window.open("https://www.linkedin.com/in/gabriel-caetano-7a454b149/", "_blank")}>
                    LinkedIn
                    </StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton onClick={() => window.open("https://github.com/GabrielCaetanoo", "_blank")}>
                    GitHub
                    </StyledButton>
                </Grid>
                </Grid>
                </Container>
            </StyledHero2>
<Separator /> {/* Linha de separação */}


       {/* Seção "My Skills" */}
<StyledHero2 ref={skillsRef} >
    <Container maxWidth="lg" >
        <Typography color="primary.contrastText" variant="h1" textAlign="center" gutterBottom>
            My Skills
        </Typography>
        <Typography color="primary.contrastText" variant="h5" textAlign="center" paragraph>
            Tecnologias e linguagens que utilizo no desenvolvimento de projetos.
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
            {/* Adicione mais itens conforme necessário */}
        </Grid>
    </Container>
</StyledHero2>
<Separator  /> {/* Linha de separação */}
<StyledHero2 ref={projectsRef} sx={{ padding: theme.spacing(4, 0) }}>
    <Projects />
</StyledHero2>
            <Separator /> {/* Linha de separação */}

        </>
    );
};

export default Hero;
