import { useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";
// 1. Importe o novo componente de métricas
import ImpactMetrics from "../../components/ImpactMetrics/ImpactMetrics";
import AIShowcase from "../../components/AIShowcase/AIShowcase";
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
        <Hero 
          aboutRef={aboutRef} 
          skillsRef={skillsRef} 
          projectsRef={projectsRef} 
          toggleLanguage={toggleLanguage} 
          lang={lang}                     
        />
        {/* 2. Adicione a seção de métricas aqui */}
        <ImpactMetrics /> 
        <AIShowcase /> {/* Nova seção aqui */}
      </>
    );
};

export default Home;