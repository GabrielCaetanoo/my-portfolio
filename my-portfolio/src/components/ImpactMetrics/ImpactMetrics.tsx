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
    // Organização dos dados vindo do JSON
    const metrics = [
        {
            label: translations.perf,
            value: translations.perfDesc,
            icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#64FFDA' }} />,
        },
        {
            label: translations.auto,
            value: translations.autoDesc,
            icon: <AutorenewIcon sx={{ fontSize: 40, color: '#64FFDA' }} />,
        },
        {
            label: translations.time,
            value: translations.timeDesc,
            icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#64FFDA' }} />,
        }
    ];

    return (
        <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 8 }}>
                    {translations.title}
                </Typography>
                <Grid container spacing={4}>
                    {metrics.map((metric, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper sx={{ 
                                p: 4, 
                                backgroundColor: 'secondary.main', 
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                textAlign: 'center',
                                height: '100%'
                            }}>
                                <Stack spacing={2} alignItems="center">
                                    {metric.icon}
                                    <Typography variant="h4" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>
                                        {metric.label}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                        {metric.value}
                                    </Typography>
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