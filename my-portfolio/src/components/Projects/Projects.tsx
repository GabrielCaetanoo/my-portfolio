import { Container, Typography, Box, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language'; // Para links de Demo

interface Project {
    id: string;
    name: string;
    description: string;
    githubUrl?: string; // Opcional, já que são privados
    demoUrl?: string;   // Link do site no ar
    badge: string;
}

interface ProjectsProps {
    translations: {
        projectsTitle: string;
        viewOnGithub: string;
        projects: {
            sbr_title: string;
            sbr_desc: string;
            salon_title: string;
            salon_desc: string;
            uneagro_title: string;
            uneagro_desc: string;
        };
    };
}

const Projects = ({ translations }: ProjectsProps) => {
    const theme = useTheme();

    // DEFINIÇÃO MANUAL DOS PROJETOS PRINCIPAIS
    const featuredProjects: Project[] = [
        {
            id: 'sbr',
            name: translations.projects.sbr_title,
            description: translations.projects.sbr_desc,
            demoUrl: "https://sbrimoveis.com.br", // Exemplo de link
            badge: "+40% Perf. Search"
        },
        {
            id: 'salon',
            name: translations.projects.salon_title,
            description: translations.projects.salon_desc,
            badge: "-30% Manual Ops"
        },
        {
            id: 'uneagro',
            name: translations.projects.uneagro_title,
            description: translations.projects.uneagro_desc,
            badge: "Saved 5h/week"
        }
    ];

    return (
        <Container sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h2" color="primary.contrastText" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                {translations.projectsTitle}
            </Typography>

            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
                gap: 4, 
                width: '100%' 
            }}>
                {featuredProjects.map(project => (
                    <Card key={project.id} sx={{ 
                        backgroundColor: 'secondary.main', 
                        color: 'text.primary',
                        border: '1px solid rgba(100, 255, 218, 0.1)',
                        transition: '0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '&:hover': {
                            transform: 'translateY(-10px)',
                            borderColor: theme.palette.primary.contrastText,
                            boxShadow: `0 10px 30px -15px ${theme.palette.primary.contrastText}33`
                        }
                    }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                                <GitHubIcon sx={{ color: 'primary.contrastText', opacity: project.githubUrl ? 1 : 0.3 }} />
                                <Chip 
                                    icon={<TrendingUpIcon style={{ color: '#0A192F', fontSize: '1rem' }} />} 
                                    label={project.badge} 
                                    sx={{ 
                                        backgroundColor: theme.palette.primary.contrastText, 
                                        color: '#0A192F', 
                                        fontWeight: 'bold',
                                        fontSize: '0.75rem'
                                    }} 
                                />
                            </Stack>
                            
                            <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 2, fontWeight: 600 }}>
                                {project.name}
                            </Typography>
                            
                            <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '80px', lineHeight: 1.6 }}>
                                {project.description}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ p: 2, gap: 1 }}>
                            {project.githubUrl && (
                                <Button size="small" variant="outlined" href={project.githubUrl} target="_blank">
                                    Code
                                </Button>
                            )}
                            {project.demoUrl ? (
                                <Button 
                                    size="small" 
                                    variant="contained" 
                                    startIcon={<LanguageIcon />}
                                    href={project.demoUrl} 
                                    target="_blank"
                                    sx={{ backgroundColor: 'primary.contrastText', color: '#0A192F', '&:hover': { opacity: 0.8 } }}
                                >
                                    Live Demo
                                </Button>
                            ) : (
                                <Typography variant="caption" sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
                                    Private Enterprise Project
                                </Typography>
                            )}
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default Projects;