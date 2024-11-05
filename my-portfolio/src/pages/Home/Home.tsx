import { useRef, useState } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";
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

    // Seleciona as traduções com base na linguagem atual
    const translations = lang === 'en' ? translationsEN : translationsPT;

    return (
      <>
        <NavBar 
          translations={translations} // Passa as traduções diretamente
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
      </>
    );
};

export default Home;
