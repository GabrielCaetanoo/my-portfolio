import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme, Box } from "@mui/material";
import type { ISourceOptions } from "@tsparticles/engine"; // Tipagem forte para o build

const AnimatedBackground = () => {
    const [init, setInit] = useState(false);
    const theme = useTheme();
    const neonColor = theme.palette.primary.contrastText;

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Definimos as opções fora para garantir que o TypeScript valide tudo
    const options: ISourceOptions = {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        particles: {
            color: { value: neonColor },
            links: {
                color: neonColor,
                distance: 180,
                enable: true,
                opacity: 0.5, // Aumentado para visibilidade
                width: 1.5,
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: { default: "out" },
            },
            number: {
                density: { enable: true, area: 800 },
                value: 100, // Mais partículas para preencher o fundo
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
            },
        },
        detectRetina: true,
    };

    if (!init) return null;

    return (
        <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
        }}>
            <Particles
                id="tsparticles"
                options={options}
            />
        </Box>
    );
};

export default AnimatedBackground;