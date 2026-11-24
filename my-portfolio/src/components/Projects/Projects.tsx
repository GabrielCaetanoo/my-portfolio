import { Container, Typography, Box, Card, CardContent, CardActions, Button, Chip, Stack, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

interface ProjectItem {
    id: string;
    name: string;
    badge: string;
    desc: string;
    stack: string;
    demoUrl?: string;
}

interface ProjectsProps {
    translations: {
        projectsTitle: string;
        liveDemo: string;
        privateRepo: string;
        items: ProjectItem[];
    };
}

const Projects = ({ translations }: ProjectsProps) => {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: '#0A192F', backgroundImage: `radial-gradient(#112240 1px, transparent 1px)`, backgroundSize: '45px 45px' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" color="primary.contrastText" textAlign="center" sx={{ mb: { xs: 6, md: 10 }, fontWeight: 700 }}>
                    {translations.projectsTitle}
                </Typography>
                <Grid container spacing={4}>
                    {translations.items.map(project => (
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
                                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                                        <FolderOpenOutlinedIcon sx={{ color: 'primary.contrastText', opacity: 0.6 }} />
                                        <Chip
                                            label={project.badge}
                                            sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 800, fontSize: '0.7rem' }}
                                        />
                                    </Stack>
                                    <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 2, fontWeight: 700 }}>{project.name}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>{project.desc}</Typography>
                                    <Typography variant="caption" sx={{ color: 'text.primary', opacity: 0.75, fontFamily: 'monospace' }}>{project.stack}</Typography>
                                </CardContent>
                                <CardActions sx={{ p: 4, pt: 0 }}>
                                    {project.demoUrl ? (
                                        <Button fullWidth variant="contained" startIcon={<LanguageIcon />} href={project.demoUrl} target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: theme.palette.primary.contrastText, color: '#0A192F', fontWeight: 700, '&:hover': { backgroundColor: theme.palette.primary.contrastText, opacity: 0.85 } }}>
                                            {translations.liveDemo}
                                        </Button>
                                    ) : (
                                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ width: '100%', color: 'text.disabled' }}>
                                            <LockOutlinedIcon sx={{ fontSize: '1rem' }} />
                                            <Typography variant="caption" sx={{ fontStyle: 'italic' }}>{translations.privateRepo}</Typography>
                                        </Stack>
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
