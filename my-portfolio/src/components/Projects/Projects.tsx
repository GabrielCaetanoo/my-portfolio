import { useEffect, useState } from 'react';
import { fetchProjects } from '../../utils/api';
import { Container, Typography, Box, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

interface ProjectsProps {
    translations: {
        projectsTitle: string;
        viewOnGithub: string;
    };
}

const Projects = ({ translations }: ProjectsProps) => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const theme = useTheme();

    useEffect(() => {
        fetchProjects().then(data => setProjects(data));
    }, []);

    // Função para renderizar as métricas de impacto que definimos
    const renderImpactBadge = (projectName: string) => {
        if (projectName.toLowerCase().includes('salon')) {
            return <Chip 
                icon={<TrendingUpIcon style={{ color: '#0A192F' }} />} 
                label="-30% Manual Ops" 
                sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 'bold' }} 
            />;
        }
        if (projectName.toLowerCase().includes('sbr')) {
            return <Chip 
                icon={<TrendingUpIcon style={{ color: '#0A192F' }} />} 
                label="+40% Perf. Search" 
                sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 'bold' }} 
            />;
        }
        if (projectName.toLowerCase().includes('uneagro')) {
            return <Chip 
                icon={<TrendingUpIcon style={{ color: '#0A192F' }} />} 
                label="Saved 5h/week" 
                sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 'bold' }} 
            />;
        }
        return null;
    };

    return (
        <Container 
            sx={{ 
                py: 8,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}
        >
            <Typography variant="h2" color="primary.contrastText" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                {translations.projectsTitle}
            </Typography>

            {projects.length > 0 ? (
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
                    gap: 4, 
                    width: '100%' 
                }}>
                    {projects.map(project => (
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
                                    <GitHubIcon sx={{ color: 'primary.contrastText', fontSize: '2rem' }} />
                                    {renderImpactBadge(project.name)}
                                </Stack>
                                
                                <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 2, fontWeight: 600 }}>
                                    {project.name}
                                </Typography>
                                
                                <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '60px' }}>
                                    {project.description || "Project developed focusing on scalability and modern architectural patterns."}
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ p: 2 }}>
                                <Button 
                                    size="small" 
                                    variant="outlined"
                                    href={project.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    sx={{ 
                                        color: 'primary.contrastText', 
                                        borderColor: 'primary.contrastText',
                                        '&:hover': { backgroundColor: 'rgba(100, 255, 218, 0.1)', borderColor: 'primary.contrastText' }
                                    }}
                                >
                                    {translations.viewOnGithub}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Typography color="text.secondary">Loading your engineering portfolio...</Typography>
            )}
        </Container>
    );
};

export default Projects;