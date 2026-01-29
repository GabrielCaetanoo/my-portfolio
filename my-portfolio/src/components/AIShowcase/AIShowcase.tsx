import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
// 'motion' removido por não estar sendo usado
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchemaIcon from '@mui/icons-material/Schema';
// CAMINHO CORRIGIDO: Removido um '../' para localizar a imagem corretamente
import RAGDiagram from '../../assets/images/rag-diagram.png'; 

const AIShowcase = () => {
    const steps = [
        { title: "Data Ingestion", desc: "Extração e limpeza de dados brutos.", icon: <StorageIcon />, color: "#64FFDA" },
        { title: "Vector Embeddings", desc: "Conversão de texto em vetores para busca semântica.", icon: <SchemaIcon />, color: "#64FFDA" },
        { title: "RAG Retrieval", desc: "Recuperação de contexto em tempo real para a LLM.", icon: <PsychologyIcon />, color: "#64FFDA" },
        { title: "AI Response", desc: "Geração de respostas precisas e personalizadas.", icon: <SmartToyIcon />, color: "#64FFDA" }
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
                    <Box component="img" src={RAGDiagram} sx={{ maxWidth: '100%', borderRadius: 3, border: '1px solid rgba(100,255,218,0.1)' }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 3 }}>
                        Arquitetura de RAG implementada no Salon App para automação de 30% das operações.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default AIShowcase;