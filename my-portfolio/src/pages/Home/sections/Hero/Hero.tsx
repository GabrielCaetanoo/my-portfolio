import { Grid, styled, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { RefObject } from "react";

interface HeroProps {
    aboutRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    projectsRef: RefObject<HTMLDivElement>;
}

const Hero = ({ aboutRef, skillsRef, projectsRef }: HeroProps) => {

    const Separator = styled("div")(() => ({
        borderBottom: "2px solid rgba(255, 255, 255, 0.3)", // Altere a cor e espessura conforme necessário
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
        flexDirection: "column", // Alinha o conteúdo em coluna
        alignItems: "flex-start", // Alinha o conteúdo ao topo
        position: 'relative',
        overflow: 'hidden',
        padding: theme.spacing(4), // Adiciona algum espaço em torno do conteúdo
        [theme.breakpoints.up('xs')]: {
            paddingTop: "50px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }

    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
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
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora ab nemo neque magni harum sunt voluptate consectetur laboriosam, voluptatem dolores porro unde ratione quia, ad aliquid perferendis vitae incidunt.</h4>
                    </Typography>
                    {/* Adicione o conteúdo da seção "About" aqui */}
                </Container>
            </StyledHero2>
            <Separator /> {/* Linha de separação */}


            {/* Seção "My Skills" */}
            <StyledHero2 ref={skillsRef}>
                <Container maxWidth="lg">
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">
                        My Skills
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis tempore nisi facilis laboriosam? Aperiam voluptates corrupti sapiente officiis fugiat id fugit ducimus modi quibusdam blanditiis. Dignissimos, adipisci. Quasi, dolores.</h4>
                    </Typography>
                    {/* Adicione o conteúdo da seção "My Skills" aqui */}
                </Container>
            </StyledHero2>
            <Separator /> {/* Linha de separação */}


            {/* Seção "Projects" */}
            <StyledHero2 ref={projectsRef}>
                <Container maxWidth="lg">
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">
                        Projects
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, atque deleniti? Est sed placeat atque quibusdam ad quisquam adipisci officiis, pariatur fugiat fuga eos at reiciendis inventore exercitationem minima necessitatibus?</h4>
                    </Typography>
                    {/* Adicione o conteúdo da seção "Projects" aqui */}
                </Container>
            </StyledHero2>
            <Separator /> {/* Linha de separação */}

        </>
    );
};

export default Hero;
