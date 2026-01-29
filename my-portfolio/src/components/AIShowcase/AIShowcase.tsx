import { Box, Container, Typography } from "@mui/material";
// Importando apenas o que é usado para limpar os erros do console
import RAGDiagram from '../../assets/images/rag-diagram.png'; 

const AIShowcase = () => {
    return (
        <Box sx={{ py: { xs: 8, md: 15 }, backgroundColor: "secondary.main" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 4 }}>
                    AI Architecture: RAG Specialist
                </Typography>
                
                <Typography variant="body1" textAlign="center" sx={{ color: 'text.secondary', mb: 8, maxWidth: '800px', mx: 'auto' }}>
                    Arquitetura implementada para automação de processos, utilizando bancos de vetores para recuperação de contexto em tempo real.
                </Typography>

                <Box sx={{ textAlign: 'center' }}>
                    <Box 
                        component="img" 
                        src={RAGDiagram} 
                        alt="RAG Architecture Diagram"
                        sx={{ 
                            maxWidth: '100%', 
                            borderRadius: 3, 
                            border: '1px solid rgba(100,255,218,0.1)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }} 
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default AIShowcase;