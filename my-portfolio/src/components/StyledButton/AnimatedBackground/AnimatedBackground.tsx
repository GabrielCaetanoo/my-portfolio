import { Box } from "@mui/material";
import BackgroundSVG from './Foam@1x-10.0s-2519px-1288px.svg'; // Caminho correto para o arquivo

export const AnimatedBackground = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${BackgroundSVG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
                backgroundBlendMode: 'soft-light', // Mescla a imagem com o fundo
                filter: 'blur(60px)', // Suaviza as bordas
            }}
        />
    );
};
