import { Box, Container, Typography, Grid, Paper, useTheme } from "@mui/material";

interface SkillsProps {
    title: string;
    intro: string;
}

interface SkillItem {
    name: string;
    icon: string;
    // Ícones pretos no devicon somem no fundo escuro: forçamos uma cor clara
    color?: string;
}

const LIGHT = '#CCD6F6';

const skillCategories: { name: string; items: SkillItem[] }[] = [
    {
        name: "Frontend & Mobile",
        items: [
            { name: 'React', icon: 'devicon-react-original' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain' },
            { name: 'Next.js', icon: 'devicon-nextjs-plain', color: LIGHT },
            { name: 'Flutter', icon: 'devicon-flutter-plain' },
            { name: 'Redux', icon: 'devicon-redux-original' },
            { name: 'Material UI', icon: 'devicon-materialui-plain' },
        ]
    },
    {
        name: "Backend & Data",
        items: [
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Express', icon: 'devicon-express-original', color: LIGHT },
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
            { name: 'Supabase', icon: 'devicon-supabase-plain' },
            { name: 'Firebase', icon: 'devicon-firebase-plain' },
            { name: 'Prisma', icon: 'devicon-prisma-original', color: LIGHT },
        ]
    },
    {
        name: "Tools & Cloud",
        items: [
            { name: 'Git', icon: 'devicon-git-plain' },
            { name: 'GitHub', icon: 'devicon-github-original', color: LIGHT },
            { name: 'Docker', icon: 'devicon-docker-plain' },
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', color: LIGHT },
            { name: 'Vercel', icon: 'devicon-vercel-original', color: LIGHT },
            { name: 'Jira', icon: 'devicon-jira-plain' },
        ]
    }
];

const Skills = ({ title, intro }: SkillsProps) => {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: "#0A192F" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>
                    {title}
                </Typography>
                <Typography variant="h6" textAlign="center" sx={{ color: 'text.secondary', mb: 8, mt: 2 }}>
                    {intro}
                </Typography>
                <Grid container spacing={4}>
                    {skillCategories.map((category) => (
                        <Grid item xs={12} md={4} key={category.name}>
                            <Paper sx={{
                                p: 4,
                                background: 'rgba(17, 34, 64, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                borderRadius: 5,
                                height: '100%',
                                transition: '0.3s',
                                '&:hover': { borderColor: theme.palette.primary.contrastText, boxShadow: '0 0 20px rgba(100, 255, 218, 0.1)' }
                            }}>
                                <Typography variant="h5" sx={{ color: 'primary.contrastText', mb: 4, fontWeight: 700, textAlign: 'center' }}>
                                    {category.name}
                                </Typography>
                                <Grid container spacing={3} justifyContent="center">
                                    {category.items.map((skill) => (
                                        <Grid item xs={4} key={skill.name} sx={{ textAlign: 'center' }}>
                                            <Box sx={{ transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                                                <i
                                                    className={`${skill.icon}${skill.color ? '' : ' colored'}`}
                                                    style={{ fontSize: "2.8rem", color: skill.color }}
                                                    aria-hidden="true"
                                                ></i>
                                                <Typography variant="caption" display="block" sx={{ mt: 1, color: 'text.secondary', fontWeight: 500 }}>
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
