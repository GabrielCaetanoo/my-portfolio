import { Box, Container, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import theme from "../../theme";

interface ExperienceProps {
    translations: {
        experience: {
            title: string;
            edu: string;
            eduDesc: string;
            dev: string;
            devDesc: string;
            fin: string;
            finDesc: string;
        }
    };
}

const Experience = ({ translations }: ExperienceProps) => {
    const experiences = [
        { period: "2024 - 2026", title: translations.experience.edu, company: "UniCesumar", desc: translations.experience.eduDesc, icon: <SchoolIcon />, color: theme.palette.primary.contrastText },
        { period: "2025 - 2026", title: translations.experience.dev, company: "Salon App / SBR Imóveis", desc: translations.experience.devDesc, icon: <CodeIcon />, color: "#64FFDA" },
        { period: "2022 - 2025", title: translations.experience.fin, company: "Construtora Planespaço", desc: translations.experience.finDesc, icon: <BusinessCenterIcon />, color: "#8892B0" }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: "#0A192F", backgroundImage: `radial-gradient(#112240 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            <Container maxWidth="md">
                <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText', mb: 10, fontWeight: 700 }}>
                    {translations.experience.title}
                </Typography>
                <Timeline position="alternate">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent sx={{ m: 'auto 0', color: 'text.secondary', fontWeight: 600 }}>{exp.period}</TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)' }} />
                                <TimelineDot sx={{ bgcolor: '#0A192F', borderColor: exp.color, borderWidth: 2, boxShadow: `0 0 15px ${exp.color}44` }}>
                                    {exp.icon}
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '20px', px: 3 }}>
                                <Typography variant="h6" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>{exp.title}</Typography>
                                <Typography sx={{ color: 'text.primary', fontWeight: 500, opacity: 0.9 }}>{exp.company}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, lineHeight: 1.7 }}>{exp.desc}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
};

export default Experience;