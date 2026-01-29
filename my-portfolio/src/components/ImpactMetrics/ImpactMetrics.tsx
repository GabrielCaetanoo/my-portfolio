import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface ImpactMetricsProps {
    translations: {
        title: string;
        perf: string;
        perfDesc: string;
        auto: string;
        autoDesc: string;
        time: string;
        timeDesc: string;
    };
}

const ImpactMetrics = ({ translations }: ImpactMetricsProps) => {
    const metrics = [
        { label: translations.perf, value: translations.perfDesc, icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#64FFDA' }} /> },
        { label: translations.auto, value: translations.autoDesc, icon: <AutorenewIcon sx={{ fontSize: 40, color: '#64FFDA' }} /> },
        { label: translations.time, value: translations.timeDesc, icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#64FFDA' }} /> }
    ];

    return (
        <Box sx={{ 
            py: 12, 
            backgroundColor: '#0A192F',
            backgroundImage: `radial-gradient(#112240 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 8, fontWeight: 700 }}>
                    {translations.title}
                </Typography>
                <Grid container spacing={4}>
                    {metrics.map((metric, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper sx={{ 
                                p: 5, 
                                background: 'rgba(17, 34, 64, 0.6)', 
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                borderRadius: '20px',
                                textAlign: 'center',
                                height: '100%',
                                transition: '0.4s',
                                '&:hover': { transform: 'translateY(-10px)', borderColor: '#64FFDA', boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }
                            }}>
                                <Stack spacing={2} alignItems="center">
                                    <Box sx={{ p: 1, borderRadius: '50%', background: 'rgba(100, 255, 218, 0.05)' }}>{metric.icon}</Box>
                                    <Typography variant="h4" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>{metric.label}</Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>{metric.value}</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ImpactMetrics;