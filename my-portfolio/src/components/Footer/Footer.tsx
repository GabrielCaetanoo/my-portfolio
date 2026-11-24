import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface FooterProps {
    translations: {
        tagline: string;
        built: string;
    };
}

const links = [
    { href: "https://github.com/GabrielCaetanoo", label: "GitHub", icon: <GitHubIcon /> },
    { href: "https://www.linkedin.com/in/gabriel-caetano-7a454b149/", label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: "https://wa.me/5544998596796", label: "WhatsApp", icon: <WhatsAppIcon /> },
];

const Footer = ({ translations }: FooterProps) => {
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
                    textAlign={{ xs: 'center', md: 'left' }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>
                            Gabriel Caetano
                        </Typography>
                        <Typography variant="body2">
                            {translations.tagline}
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        {links.map((link) => (
                            <IconButton
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                sx={{ color: 'text.secondary', '&:hover': { color: '#64FFDA' } }}
                            >
                                {link.icon}
                            </IconButton>
                        ))}
                    </Stack>

                    <Typography variant="caption">
                        © {new Date().getFullYear()} · {translations.built}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
