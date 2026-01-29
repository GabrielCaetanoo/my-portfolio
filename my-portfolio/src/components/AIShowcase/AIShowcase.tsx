import { Box, Container, Typography } from "@mui/material";
import RAGDiagram from '../../assets/images/rag-diagram.png'; 

interface AIShowcaseProps {
    translations: {
        ai_showcase: {
            title: string;
            subtitle: string;
        }
    };
}

const AIShowcase = ({ translations }: AIShowcaseProps) => {
    return (
        <Box sx={{ py: { xs: 8, md: 15 }, backgroundColor: "secondary.main" }}>
            <Container maxWidth="lg">
                {/* TRADUÇÃO AQUI: Título dinâmico vindo do JSON */}
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 4 }}>
                    {translations.ai_showcase.title}
                </Typography>
                
                <Typography variant="body1" textAlign="center" sx={{ color: 'text.secondary', mb: 8, maxWidth: '800px', mx: 'auto' }}>
                    {translations.ai_showcase.subtitle}
                </Typography>

                <Box sx={{ textAlign: 'center' }}>
                    <Box 
                        component="img" 
                        src={RAGDiagram} 
                        alt="RAG Architecture"
                        sx={{ maxWidth: '100%', borderRadius: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default AIShowcase;