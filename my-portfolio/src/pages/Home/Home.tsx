import { useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";
import ImpactMetrics from "../../components/ImpactMetrics/ImpactMetrics";
import AIShowcase from "../../components/AIShowcase/AIShowcase";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer"; // Certifique-se de ter criado este arquivo
import translationsEN from '../../public/locales/NavBar/en/translation.json';
import translationsPT from '../../public/locales/NavBar/pt/translation.json';

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
      <>
        <NavBar 
          translations={translations} 
          onAboutClick={() => handleScrollTo(aboutRef)}
          onSkillsClick={() => handleScrollTo(skillsRef)}
          onProjectsClick={() => handleScrollTo(projectsRef)}
        />
        
        {/* Seção Principal */}
        <Hero 
          aboutRef={aboutRef} 
          skillsRef={skillsRef} 
          projectsRef={projectsRef} 
          toggleLanguage={toggleLanguage} 
          lang={lang} 
        />

        {/* Prova de Valor: Métricas e IA */}
        <ImpactMetrics /> 
        <AIShowcase />

        {/* Autoridade: Jornada e Projetos */}
        <Experience />
        <div ref={projectsRef}>
            <Projects translations={{
                projectsTitle: lang === 'en' ? "Featured Projects" : "Projetos em Destaque",
                viewOnGithub: lang === 'en' ? "View on GitHub" : "Ver no GitHub"
            }} />
        </div>

        {/* Fechamento */}
        <Footer />
      </>
    );
};

export default Home;