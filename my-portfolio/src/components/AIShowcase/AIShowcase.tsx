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
        <Box sx={{ py: 15, backgroundColor: "#0A192F", position: 'relative', overflow: 'hidden' }}>
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
                <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', mb: 4, fontWeight: 700 }}>
                    {translations.ai_showcase.title}
                </Typography>
                <Typography variant="body1" textAlign="center" sx={{ color: 'text.secondary', mb: 8, maxWidth: '800px', mx: 'auto', fontSize: '1.1rem' }}>
                    {translations.ai_showcase.subtitle}
                </Typography>
                <Box sx={{ 
                    p: 2, 
                    background: 'rgba(17, 34, 64, 0.4)', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    backdropFilter: 'blur(5px)'
                }}>
                    <Box component="img" src={RAGDiagram} alt="RAG Architecture" sx={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} />
                </Box>
            </Container>
        </Box>
    );
};

export default AIShowcase;