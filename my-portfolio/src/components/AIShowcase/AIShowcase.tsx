import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
// motion removido pois o ESLint acusou que não estava sendo usado
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchemaIcon from '@mui/icons-material/Schema';
import RAGDiagram from '../../assets/images/rag-diagram.png'; // Verifique se o arquivo existe nesta pasta

const AIShowcase = () => {
    const steps = [
        { title: "Data Ingestion", desc: "Extração de dados brutos.", icon: <StorageIcon />, color: "#64FFDA" },
        { title: "Vector Embeddings", desc: "Busca semântica em Vector DBs.", icon: <SchemaIcon />, color: "#64FFDA" },
        { title: "RAG Retrieval", desc: "Recuperação de contexto para LLM.", icon: <PsychologyIcon />, color: "#64FFDA" },
        { title: "AI Response", desc: "Geração de respostas precisas.", icon: <SmartToyIcon />, color: "#64FFDA" }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: "secondary.main" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 8 }}>
                    AI Architecture: RAG Specialist
                </Typography>
                <Grid container spacing={4}>
                    {steps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper sx={{ p: 3, height: '100%', backgroundColor: 'primary.main', borderLeft: `4px solid ${step.color}` }}>
                                <Stack spacing={2}>
                                    <Box sx={{ color: step.color }}>{step.icon}</Box>
                                    <Typography variant="h5" sx={{ fontWeight: 600 }}>{step.title}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{step.desc}</Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <Box component="img" src={RAGDiagram} sx={{ maxWidth: '100%', borderRadius: 3 }} />
                </Box>
            </Container>
        </Box>
    );
};

export default AIShowcase;