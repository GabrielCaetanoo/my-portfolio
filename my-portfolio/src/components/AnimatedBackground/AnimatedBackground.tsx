import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Box } from "@mui/material";
import type { Engine, ISourceOptions } from "@tsparticles/engine"; // Tipagem oficial

const AnimatedBackground = () => {
    const [init, setInit] = useState(false);
    const neonColor = "#64FFDA"; 

    useEffect(() => {
        // Tipagem 'engine: Engine' resolve o erro ts(7006)
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        fullScreen: { enable: false },
        fpsLimit: 120,
        particles: {
            color: { value: neonColor },
            links: {
                color: neonColor,
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            move: { enable: true, speed: 1.2 },
            number: {
                // FIX: 'area' removido para resolver erro TS2353 do Vercel
                density: { enable: true }, 
                value: 80,
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (!init) return null;

    return (
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <Particles id="tsparticles" options={options} />
        </Box>
    );
};

export default AnimatedBackground;