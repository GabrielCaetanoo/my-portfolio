import { Grid, styled, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { AnimatedBackground } from '../../../../components/StyledButton/AnimatedBackground/AnimatedBackground';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: 'relative', // Adicionado para suportar o background absoluto
        overflow: 'hidden',  // Adicionado para evitar scroll
        [theme.breakpoints.up('xs')]: { // <= Mobile
          paddingTop: "50px"

        },
        [theme.breakpoints.up('md')]: { // >= Mobile

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
                {/* Animated Background */}
                <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={-1}>
                </Box>
                {/* Conteúdo principal */}
                <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                            <AnimatedBackground/>
                              {/* //AQUI ERA PRA VIR O BACKGROUND ANIMATED */}
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
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <EmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero;
