import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";

export interface MetricItem {
    value: string;
    label: string;
    desc: string;
}

interface ImpactMetricsProps {
    translations: {
        title: string;
        subtitle: string;
        items: MetricItem[];
    };
}

const ImpactMetrics = ({ translations }: ImpactMetricsProps) => {
    return (
        <Box sx={{
            py: { xs: 10, md: 12 },
            backgroundColor: '#0A192F',
            backgroundImage: `radial-gradient(#112240 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            position: 'relative'
        }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 2, fontWeight: 700 }}>
                    {translations.title}
                </Typography>
                <Typography variant="body1" textAlign="center" sx={{ color: 'text.secondary', mb: 8 }}>
                    {translations.subtitle}
                </Typography>
                <Grid container spacing={3}>
                    {translations.items.map((metric) => (
                        <Grid item xs={12} sm={6} md={3} key={metric.label}>
                            <Paper sx={{
                                p: 4,
                                background: 'rgba(17, 34, 64, 0.6)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                borderRadius: '20px',
                                textAlign: 'center',
                                height: '100%',
                                transition: '0.4s',
                                '&:hover': { transform: 'translateY(-8px)', borderColor: '#64FFDA', boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)' }
                            }}>
                                <Stack spacing={1.5} alignItems="center">
                                    <Typography sx={{ color: 'primary.contrastText', fontWeight: 800, fontSize: { xs: '2.6rem', md: '3rem' }, lineHeight: 1 }}>
                                        {metric.value}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, lineHeight: 1.3 }}>
                                        {metric.label}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                                        {metric.desc}
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
