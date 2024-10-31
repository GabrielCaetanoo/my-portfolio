import { useEffect, useState } from 'react';
import { fetchProjects } from '../../utils/api';
import { Container, Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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

    return (
        <Container 
            sx={{ 
                backgroundColor: theme.palette.background.default,
                padding: '20px', 
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
            }}
        >
            <Typography variant="h1" color={theme.palette.primary.contrastText} textAlign="center">
                {translations.projectsTitle}
            </Typography>
            {projects.length > 0 ? (
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2, width: '100%' }}>
                    {projects.map(project => (
                        <Card key={project.id} sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.common.black }}>
                            <CardContent>
                                <Typography variant="h5" color={theme.palette.common.black}>
                                    {project.name}
                                </Typography>
                                <Typography variant="body1" color={theme.palette.common.black}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size="small" 
                                    color="primary" 
                                    href={project.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    {translations.viewOnGithub}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Typography color={theme.palette.primary.contrastText}>Loading projects...</Typography>
            )}
        </Container>
    );
};

export default Projects;
