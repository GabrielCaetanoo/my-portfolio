import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme, Box } from "@mui/material";
import type { ISourceOptions } from "@tsparticles/engine";

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
                opacity: 0.5,
                width: 1.5,
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: { default: "out" },
            },
            number: {
                // CORREÇÃO: Removido 'area' e adicionado a nova estrutura de densidade
                density: { 
                    enable: true, 
                    width: 1920, 
                    height: 1080 
                },
                value: 100,
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