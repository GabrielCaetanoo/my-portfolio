import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchemaIcon from '@mui/icons-material/Schema';
// Importe a imagem do diagrama profissional gerada
import RAGDiagram from '../../../assets/images/rag-diagram.png'; 

const AIShowcase = () => {
    const steps = [
        {
            title: "Data Ingestion",
            desc: "Extração e limpeza de dados brutos (agendamentos, serviços e preferências).",
            icon: <StorageIcon />,
            color: "#64FFDA"
        },
        {
            title: "Vector Embeddings",
            desc: "Conversão de texto em vetores numéricos para busca semântica em Vector DBs.",
            icon: <SchemaIcon />,
            color: "#64FFDA"
        },
        {
            title: "RAG Retrieval",
            desc: "Recuperação de contexto em tempo real para alimentar o prompt da LLM.",
            icon: <PsychologyIcon />,
            color: "#64FFDA"
        },
        {
            title: "AI Response",
            desc: "Geração de respostas precisas e personalizadas para o usuário final.",
            icon: <SmartToyIcon />,
            color: "#64FFDA"
        }
    ];

    return (
        <Box sx={{ py: 15, backgroundColor: "secondary.main", position: 'relative' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" gutterBottom sx={{ color: 'primary.contrastText', mb: 2 }}>
                    AI Architecture: RAG Specialist
                </Typography>
                <Typography variant="h6" textAlign="center" sx={{ color: 'text.secondary', mb: 8, maxWidth: '700px', mx: 'auto' }}>
                    Não apenas prompts. Eu construo a infraestrutura que torna a IA precisa, segura e integrada ao negócio.
                </Typography>

                <Grid container spacing={4}>
                    {steps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper
                                component={motion.div}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    backgroundColor: 'primary.main',
                                    border: '1px solid rgba(100, 255, 218, 0.05)',
                                    borderRadius: 3,
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '4px',
                                        height: '100%',
                                        backgroundColor: step.color
                                    }
                                }}
                            >
                                <Stack spacing={2}>
                                    <Box sx={{ color: step.color }}>{step.icon}</Box>
                                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {step.desc}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Seção do Diagrama Profissional */}
                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <Box 
                        component="img"
                        src={RAGDiagram} 
                        alt="RAG Architecture Diagram" 
                        sx={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            borderRadius: '12px', 
                            border: '1px solid rgba(100, 255, 218, 0.1)',
                            boxShadow: '0 0 30px rgba(100, 255, 218, 0.05)'
                        }}
                    />
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 3, fontSize: '0.9rem' }}>
                        Arquitetura de Retrieval-Augmented Generation (RAG) implementada no Salon App para automação de 30% das operações.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default AIShowcase;