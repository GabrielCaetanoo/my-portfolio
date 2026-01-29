import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import theme from "../../theme";

interface SkillsProps {
    title: string;
    intro: string;
}

const Skills = ({ title, intro }: SkillsProps) => {
    const skillCategories = [
        {
            name: "Frontend",
            items: [
                { name: 'React', icon: 'devicon-react-original' },
                { name: 'Next.js', icon: 'devicon-nextjs-original' },
                { name: 'TypeScript', icon: 'devicon-typescript-plain' }
            ]
        },
        {
            name: "Backend & AI",
            items: [
                { name: 'Node.js', icon: 'devicon-nodejs-plain' },
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                { name: 'AI/RAG', icon: 'devicon-python-plain' } // Simbolizando a inteligência
            ]
        },
        {
            name: "Tools & Cloud",
            items: [
                { name: 'Docker', icon: 'devicon-docker-plain' },
                { name: 'Git', icon: 'devicon-git-plain' },
                { name: 'Prisma', icon: 'devicon-prisma-original' }
            ]
        }
    ];

    return (
        <Box sx={{ py: 15 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText' }}>
                    {title}
                </Typography>
                <Typography variant="h6" textAlign="center" sx={{ color: 'text.secondary', mb: 8 }}>
                    {intro}
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {skillCategories.map((category) => (
                        <Grid item xs={12} md={4} key={category.name}>
                            <Paper sx={{ 
                                p: 4, 
                                backgroundColor: 'secondary.main', 
                                border: '1px solid rgba(100, 255, 218, 0.05)',
                                borderRadius: 4,
                                height: '100%'
                            }}>
                                <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 3, fontWeight: 600 }}>
                                    {category.name}
                                </Typography>
                                <Grid container spacing={2}>
                                    {category.items.map((skill) => (
                                        <Grid item xs={4} key={skill.name} sx={{ textAlign: 'center' }}>
                                            <Box sx={{ 
                                                '&:hover i': { color: theme.palette.primary.contrastText, transform: 'scale(1.1)' } 
                                            }}>
                                                <i className={`${skill.icon} colored`} style={{ fontSize: "2.5rem", transition: '0.3s' }}></i>
                                                <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                                                    {skill.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;