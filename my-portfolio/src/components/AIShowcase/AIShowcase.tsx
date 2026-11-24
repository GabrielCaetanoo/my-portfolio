import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import CodeIcon from '@mui/icons-material/Code';
import RateReviewIcon from '@mui/icons-material/RateReview';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface Step {
    title: string;
    desc: string;
}

interface AIShowcaseProps {
    translations: {
        title: string;
        subtitle: string;
        steps: Step[];
        note: string;
    };
}

const icons = [<AssignmentIcon />, <CodeIcon />, <RateReviewIcon />, <RocketLaunchIcon />];

const AIShowcase = ({ translations }: AIShowcaseProps) => {
    return (
        <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: "#0A192F", position: 'relative', overflow: 'hidden' }}>
            <Box sx={{
                position: 'absolute',
                top: '20%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 3, fontWeight: 700 }}>
                    {translations.title}
                </Typography>
                <Typography variant="body1" textAlign="center" sx={{ color: 'text.secondary', mb: 8, maxWidth: '780px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                    {translations.subtitle}
                </Typography>

                <Grid container spacing={3}>
                    {translations.steps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={3} key={step.title}>
                            <Paper sx={{
                                p: 4,
                                height: '100%',
                                background: 'rgba(17, 34, 64, 0.5)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(100, 255, 218, 0.1)',
                                borderRadius: '20px',
                                transition: '0.3s',
                                '&:hover': { borderColor: '#64FFDA', boxShadow: '0 0 20px rgba(100, 255, 218, 0.1)' }
                            }}>
                                <Stack spacing={2}>
                                    <Stack direction="row" alignItems="center" spacing={1.5}>
                                        <Box sx={{
                                            width: 44, height: 44, borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: '#64FFDA', background: 'rgba(100, 255, 218, 0.08)'
                                        }}>
                                            {icons[index % icons.length]}
                                        </Box>
                                        <Typography sx={{ color: 'text.secondary', fontWeight: 700, fontSize: '0.9rem' }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="h5" sx={{ color: 'primary.contrastText', fontWeight: 700 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                                        {step.desc}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="body2" textAlign="center" sx={{ color: 'text.secondary', mt: 6, opacity: 0.8 }}>
                    {translations.note}
                </Typography>
            </Container>
        </Box>
    );
};

export default AIShowcase;
