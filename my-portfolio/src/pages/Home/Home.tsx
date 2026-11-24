import { useEffect, useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";
import ImpactMetrics from "../../components/ImpactMetrics/ImpactMetrics";
import AIShowcase from "../../components/AIShowcase/AIShowcase";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
// Importe centralizado para garantir sincronia entre os idiomas
import translationsEN from '../../public/locales/en/translation.json';
import translationsPT from '../../public/locales/pt/translation.json';
import { Box } from "@mui/material";

type Lang = 'en' | 'pt';

// Visitante com navegador em português abre em PT; o resto do mundo, em EN
const detectLang = (): Lang =>
    typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const [lang, setLang] = useState<Lang>(detectLang);

    // Força o scroll para o topo ao carregar ou atualizar a página
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }, [lang]);

    const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleLanguage = () => {
        setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
    };

    // Fonte única de verdade para as traduções
    const translations = lang === 'en' ? translationsEN : translationsPT;

    return (
      <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
        <NavBar
          translations={{
            About: translations.hero.aboutMe,
            Skills: translations.hero.mySkills,
            Projects: translations.hero.projectsTitle,
            languageToggle: translations.hero.languageToggle
          }}
          onAboutClick={() => handleScrollTo(aboutRef)}
          onSkillsClick={() => handleScrollTo(skillsRef)}
          onProjectsClick={() => handleScrollTo(projectsRef)}
          onToggleLanguage={toggleLanguage}
        />

        <Hero translations={translations.hero} lang={lang} />

        <Box ref={aboutRef}>
            <ImpactMetrics translations={translations.metrics} />
            <AIShowcase translations={translations.ai_showcase} />
        </Box>

        <Experience translations={translations.experience} />

        <Box ref={skillsRef}>
            <Skills title={translations.skills.title} intro={translations.skills.intro} />
        </Box>

        <Box ref={projectsRef}>
            <Projects translations={{
                projectsTitle: translations.hero.projectsTitle,
                liveDemo: translations.projects.liveDemo,
                privateRepo: translations.projects.privateRepo,
                items: translations.projects.items
            }} />
        </Box>

        <Footer translations={translations.footer} />
      </Box>
    );
};

export default Home;
