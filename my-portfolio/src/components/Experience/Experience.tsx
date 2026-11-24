import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses } from "@mui/lab";
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import theme from "../../theme";

interface ExperienceItem {
    period: string;
    title: string;
    company: string;
    desc: string;
    type: string;
}

interface ExperienceProps {
    translations: {
        title: string;
        items: ExperienceItem[];
    };
}

const styleByType: Record<string, { icon: JSX.Element; color: string }> = {
    work: { icon: <WorkIcon />, color: theme.palette.primary.contrastText },
    code: { icon: <CodeIcon />, color: "#64FFDA" },
    edu: { icon: <SchoolIcon />, color: "#CCD6F6" },
    fin: { icon: <BusinessCenterIcon />, color: "#8892B0" },
};

const Experience = ({ translations }: ExperienceProps) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: "#0A192F", backgroundImage: `radial-gradient(#112240 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            <Container maxWidth="md">
                <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText', mb: { xs: 6, md: 10 }, fontWeight: 700 }}>
                    {translations.title}
                </Typography>
                <Timeline
                    position={isMobile ? "right" : "alternate"}
                    sx={isMobile ? { px: 0, [`& .${timelineOppositeContentClasses.root}`]: { flex: 0, p: 0 } } : undefined}
                >
                    {translations.items.map((exp) => {
                        const style = styleByType[exp.type] ?? styleByType.code;
                        return (
                            <TimelineItem key={exp.title}>
                                <TimelineOppositeContent sx={{ m: 'auto 0', px: { xs: 0, md: 3 }, color: 'text.secondary', fontWeight: 600 }}>
                                    {!isMobile && exp.period}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)' }} />
                                    <TimelineDot sx={{ bgcolor: '#0A192F', color: style.color, borderColor: style.color, borderWidth: 2, boxShadow: `0 0 15px ${style.color}44` }}>
                                        {style.icon}
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '20px', px: { xs: 2, md: 3 } }}>
                                    {isMobile && (
                                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{exp.period}</Typography>
                                    )}
                                    <Typography variant="h6" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>{exp.title}</Typography>
                                    <Typography sx={{ color: 'text.primary', fontWeight: 500, opacity: 0.9 }}>{exp.company}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, lineHeight: 1.7 }}>{exp.desc}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </Container>
        </Box>
    );
};

export default Experience;
