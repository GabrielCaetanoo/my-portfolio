import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Componente de Contador Animado
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactMetrics = () => {
    const metrics = [
        {
            title: "Performance Boost",
            value: 40,
            suffix: "%",
            desc: "Otimização de busca e filtros na plataforma SBR Imóveis.",
            icon: <SpeedIcon sx={{ fontSize: 40, color: "#64FFDA" }} />,
            grid: { xs: 12, md: 4 }
        },
        {
            title: "Process Automation",
            value: 30,
            suffix: "%",
            desc: "Redução de operações manuais no Salon App via integração de IA.",
            icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#64FFDA" }} />,
            grid: { xs: 12, md: 5 }
        },
        {
            title: "Time Saved",
            value: 5,
            suffix: "h/week",
            desc: "Economia de tempo administrativo no portal Uneagro.",
            icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#64FFDA" }} />,
            grid: { xs: 12, md: 3 }
        }
    ];

    return (
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText', mb: 6 }}>
                    Impact & Results
                </Typography>
                
                <Grid container spacing={3}>
                    {metrics.map((m, i) => (
                        <Grid item xs={m.grid.xs} md={m.grid.md} key={i}>
                            <Paper
                                component={motion.div}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: 'secondary.main',
                                    border: '1px solid rgba(100, 255, 218, 0.1)',
                                    borderRadius: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    '&:hover': {
                                        borderColor: '#64FFDA',
                                        boxShadow: '0 0 20px rgba(100, 255, 218, 0.1)'
                                    }
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{m.icon}</Box>
                                <Typography variant="h3" sx={{ color: '#64FFDA', fontWeight: 700, mb: 1 }}>
                                    <Counter value={m.value} suffix={m.suffix} />
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                                    {m.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {m.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ImpactMetrics;