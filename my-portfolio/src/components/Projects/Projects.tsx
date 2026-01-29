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
        projects: {
            sbr_desc: string;
            salon_desc: string;
            uneagro_desc: string;
        };
    };
}

const Projects = ({ translations }: ProjectsProps) => {
    const [projects, setProjects] = useState<Repository[]>([]);
    const theme = useTheme();

    useEffect(() => {
        fetchProjects().then(data => setProjects(data));
    }, []);

    // Função para identificar e formatar os projetos em destaque
    const getProjectDetails = (projectName: string, githubDesc: string) => {
        const name = projectName.toLowerCase();
        
        if (name.includes('salon')) {
            return {
                description: translations.projects.salon_desc,
                badge: "-30% Manual Ops"
            };
        }
        if (name.includes('sbr')) {
            return {
                description: translations.projects.sbr_desc,
                badge: "+40% Perf. Search"
            };
        }
        if (name.includes('uneagro')) {
            return {
                description: translations.projects.uneagro_desc,
                badge: "Saved 5h/week"
            };
        }
        
        return {
            description: githubDesc || "Project developed focusing on scalability and modern architectural patterns.",
            badge: null
        };
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
                    {projects.map(project => {
                        const { description, badge } = getProjectDetails(project.name, project.description);
                        
                        return (
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
                                        {badge && (
                                            <Chip 
                                                icon={<TrendingUpIcon style={{ color: '#0A192F', fontSize: '1rem' }} />} 
                                                label={badge} 
                                                sx={{ 
                                                    backgroundColor: theme.palette.primary.contrastText, 
                                                    color: '#0A192F', 
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem'
                                                }} 
                                            />
                                        )}
                                    </Stack>
                                    
                                    <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 2, fontWeight: 600 }}>
                                        {project.name}
                                    </Typography>
                                    
                                    <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '80px', lineHeight: 1.6 }}>
                                        {description}
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
                        );
                    })}
                </Box>
            ) : (
                <Typography color="text.secondary">Loading your engineering portfolio...</Typography>
            )}
        </Container>
    );
};

export default Projects;