import { useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";
import ImpactMetrics from "../../components/ImpactMetrics/ImpactMetrics";
import AIShowcase from "../../components/AIShowcase/AIShowcase";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import translationsEN from '../../public/locales/NavBar/en/translation.json';
import translationsPT from '../../public/locales/NavBar/pt/translation.json';
import { Box, Container, Typography } from "@mui/material";

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const [lang, setLang] = useState('en');

    const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'pt' : 'en';
        setLang(newLang);
    };

    const translations = lang === 'en' ? translationsEN : translationsPT;

    return (
      <Box sx={{ backgroundColor: "background.default" }}>
        <NavBar 
          translations={translations} 
          onAboutClick={() => handleScrollTo(aboutRef)}
          onSkillsClick={() => handleScrollTo(skillsRef)}
          onProjectsClick={() => handleScrollTo(projectsRef)}
        />
        
        {/* 1. HERO - Apenas a apresentação inicial */}
        <Hero 
          toggleLanguage={toggleLanguage} 
          lang={lang} 
        />

        {/* 2. ABOUT - Colocamos o ref aqui para o NavBar funcionar */}
        <Box ref={aboutRef} sx={{ py: 10 }}>
            <ImpactMetrics /> 
            <AIShowcase />
        </Box>

        {/* 3. EXPERIENCE - Transição entre IA e Carreira */}
        <Experience />

        {/* 4. SKILLS - Refocado para habilidades técnicas */}
        <Box ref={skillsRef} sx={{ py: 10 }}>
            <Container>
                <Typography variant="h2" color="primary.contrastText" textAlign="center" gutterBottom>
                    {lang === 'en' ? "Tech Stack" : "Tecnologias"}
                </Typography>
                {/* Aqui você pode chamar um componente de Skills ou colocar seus ícones */}
            </Container>
        </Box>

        {/* 5. PROJECTS - Única chamada de projetos, sem duplicação */}
        <Box ref={projectsRef} sx={{ py: 10 }}>
            <Projects translations={{
                projectsTitle: lang === 'en' ? "Featured Projects" : "Projetos em Destaque",
                viewOnGithub: lang === 'en' ? "View on GitHub" : "Ver no GitHub"
            }} />
        </Box>

        <Footer />
      </Box>
    );
};

export default Home;