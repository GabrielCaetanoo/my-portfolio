import { Box, Container, Typography, Stack, IconButton } from "@mui/material"; // Link removido
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <Box sx={{ 
            py: 6, 
            backgroundColor: 'secondary.main', 
            borderTop: '1px solid rgba(100, 255, 218, 0.1)',
            color: 'text.secondary'
        }}>
            <Container maxWidth="lg">
                <Stack 
                    direction={{ xs: 'column', md: 'row' }} 
                    justifyContent="space-between" 
                    alignItems="center" 
                    spacing={3}
                >
                    <Box>
                        <Typography variant="h6" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>
                            Gabriel Caetano
                        </Typography>
                        <Typography variant="body2">
                            Full Stack Developer | AI & RAG Specialist
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <IconButton 
                            href="https://github.com/GabrielCaetanoo" 
                            target="_blank" 
                            sx={{ color: 'text.secondary', '&:hover': { color: '#64FFDA' } }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton 
                            href="https://www.linkedin.com/in/gabriel-caetano-7a454b149/" 
                            target="_blank" 
                            sx={{ color: 'text.secondary', '&:hover': { color: '#64FFDA' } }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton 
                            href="https://wa.me/5544999999999" // Não esqueça de colocar seu número real!
                            target="_blank" 
                            sx={{ color: 'text.secondary', '&:hover': { color: '#64FFDA' } }}
                        >
                            <WhatsAppIcon />
                        </IconButton>
                    </Stack>

                    <Typography variant="caption">
                        © 2026 Built with React & Material UI. 
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;