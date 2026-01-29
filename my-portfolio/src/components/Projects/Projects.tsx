import { Container, Typography, Box, Card, CardContent, CardActions, Button, Chip, Stack, Grid } from '@mui/material'; // Adicionado Grid aqui
import { useTheme } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

interface Project { id: string; name: string; description: string; githubUrl?: string; demoUrl?: string; badge: string; }

interface ProjectsProps {
    translations: {
        projectsTitle: string;
        viewOnGithub: string;
        projects: { sbr_title: string; sbr_desc: string; salon_title: string; salon_desc: string; uneagro_title: string; uneagro_desc: string; };
    };
}

const Projects = ({ translations }: ProjectsProps) => {
    const theme = useTheme(); // O uso nas propriedades SX abaixo resolve o erro de 'never used'

    const featuredProjects: Project[] = [
        { id: 'sbr', name: translations.projects.sbr_title, description: translations.projects.sbr_desc, demoUrl: "https://sbrimoveis.com.br", badge: "+40% Perf. Search" },
        { id: 'salon', name: translations.projects.salon_title, description: translations.projects.salon_desc, badge: "-30% Manual Ops" },
        { id: 'uneagro', name: translations.projects.uneagro_title, demoUrl: "https://www.uneagromga.com.br", description: translations.projects.uneagro_desc, badge: "Saved 5h/week" }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: '#0A192F', backgroundImage: `radial-gradient(#112240 1px, transparent 1px)`, backgroundSize: '45px 45px' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" color="primary.contrastText" textAlign="center" sx={{ mb: 10, fontWeight: 700 }}>
                    {translations.projectsTitle}
                </Typography>
                <Grid container spacing={4}> {/* O uso do componente Grid agora está correto */}
                    {featuredProjects.map(project => (
                        <Grid item xs={12} sm={6} md={4} key={project.id}>
                            <Card sx={{ 
                                height: '100%',
                                background: 'rgba(17, 34, 64, 0.7)', 
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                borderRadius: '20px',
                                transition: '0.4s',
                                display: 'flex', flexDirection: 'column',
                                '&:hover': { transform: 'translateY(-12px)', borderColor: theme.palette.primary.contrastText, boxShadow: `0 20px 40px rgba(0,0,0,0.4)` }
                            }}>
                                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                    <Stack direction="row" justifyContent="space-between" mb={3}>
                                        <GitHubIcon sx={{ color: 'primary.contrastText', opacity: 0.5 }} />
                                        <Chip 
                                            icon={<TrendingUpIcon style={{ color: '#0A192F', fontSize: '0.9rem' }} />} 
                                            label={project.badge} 
                                            sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 800, fontSize: '0.7rem' }} 
                                        />
                                    </Stack>
                                    <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 2, fontWeight: 700 }}>{project.name}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{project.description}</Typography>
                                </CardContent>
                                <CardActions sx={{ p: 4, pt: 0 }}>
                                    {project.demoUrl ? (
                                        <Button fullWidth variant="contained" startIcon={<LanguageIcon />} href={project.demoUrl} target="_blank" sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 700, '&:hover': { opacity: 0.8 } }}>Live Demo</Button>
                                    ) : (
                                        <Typography variant="caption" sx={{ color: 'text.disabled', fontStyle: 'italic', width: '100%', textAlign: 'center' }}>Private Enterprise Project</Typography>
                                    )}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;