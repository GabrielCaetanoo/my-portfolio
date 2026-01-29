import { Box, Container, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import theme from "../../theme";

const Experience = () => {
    const experiences = [
        {
            period: "2024 - Presente",
            title: "Engenharia de Software",
            company: "UniCesumar",
            desc: "Foco em arquitetura de sistemas, algoritmos e desenvolvimento full-stack.",
            icon: <SchoolIcon />,
            color: theme.palette.primary.contrastText
        },
        {
            period: "2025 - 2026",
            title: "Full Stack Developer (Freelance)",
            company: "Salon App / SBR Imóveis",
            desc: "Desenvolvimento de soluções com IA (RAG) e otimização de performance em 40%.",
            icon: <CodeIcon />,
            color: "#64FFDA"
        },
        {
            period: "Atualmente",
            title: "Assistente Financeiro",
            company: "Construtora Planespaço",
            desc: "Visão analítica e gestão de processos, garantindo precisão em regras de negócio.",
            icon: <BusinessCenterIcon />,
            color: "#8892B0"
        }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: "background.default" }}>
            <Container maxWidth="md">
                <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText', mb: 8 }}>
                    Professional Journey
                </Typography>
                
                <Timeline position="alternate">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent sx={{ m: 'auto 0', color: 'text.secondary' }}>
                                {exp.period}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)' }} />
                                <TimelineDot sx={{ bgcolor: 'secondary.main', borderColor: exp.color, borderWidth: 2 }}>
                                    {exp.icon}
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span" sx={{ color: 'primary.contrastText', fontWeight: 600 }}>
                                    {exp.title}
                                </Typography>
                                <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>{exp.company}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                                    {exp.desc}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
};

export default Experience;