import { useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";
import ImpactMetrics from "../../components/ImpactMetrics/ImpactMetrics";
import AIShowcase from "../../components/AIShowcase/AIShowcase";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import translationsEN from '../../public/locales/NavBar/en/translation.json';
import translationsPT from '../../public/locales/NavBar/pt/translation.json';
import { Box } from "@mui/material";

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
      <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
        <NavBar 
          translations={translations} 
          onAboutClick={() => handleScrollTo(aboutRef)}
          onSkillsClick={() => handleScrollTo(skillsRef)}
          onProjectsClick={() => handleScrollTo(projectsRef)}
          onToggleLanguage={toggleLanguage} 
        />
        
        {/* 1. HERO - Apresentação principal */}
        <Hero 
          toggleLanguage={toggleLanguage} 
          lang={lang} 
        />

        {/* 2. ABOUT & AI - Impacto técnico */}
        <Box ref={aboutRef}>
            <ImpactMetrics /> 
            <AIShowcase />
        </Box>

        {/* 3. EXPERIENCE - Jornada Profissional */}
        <Experience />

        {/* 4. SKILLS - Tecnologias e Stack */}
        <Box ref={skillsRef}>
            <Skills 
                title={lang === 'en' ? "Tech Stack" : "Tecnologias"} 
                intro={lang === 'en' 
                    ? "Advanced tools I use to build scalable products and AI solutions." 
                    : "Ferramentas avançadas que utilizo para construir produtos escaláveis e soluções de IA."}
            />
        </Box>

        {/* 5. PROJECTS - Vitrine final */}
        <Box ref={projectsRef} sx={{ pb: 10 }}>
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