import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; 
import { loadSlim } from "@tsparticles/slim"; 
import { useTheme } from "@mui/material";

const AnimatedBackground = () => {
    const [init, setInit] = useState(false);
    const theme = useTheme();
    const neonColor = theme.palette.primary.contrastText;

    // Inicializa o motor de partículas apenas uma vez
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                particles: {
                    color: { value: neonColor },
                    links: {
                        color: neonColor,
                        distance: 180,
                        enable: true,
                        opacity: 0.4,
                        width: 1.5,
                    },
                    move: {
                        enable: true,
                        speed: 1.2,
                        direction: "none",
                        outModes: { default: "out" },
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 90,
                    },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 4 } },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
};

export default AnimatedBackground;