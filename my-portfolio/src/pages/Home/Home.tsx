import { useRef } from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "../../components/StyledButton/NavBar/NavBar";

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Objeto de traduções
    const translations = {
        navBarAbout: "Sobre",        // Atualizado
        navBarSkills: "Habilidades",  // Atualizado
        navBarProjects: "Projetos",   // Atualizado
    };

    return (
      <>
        <NavBar 
          translations={translations} // Passando o objeto de traduções atualizado
          onAboutClick={() => handleScrollTo(aboutRef)}
          onSkillsClick={() => handleScrollTo(skillsRef)}
          onProjectsClick={() => handleScrollTo(projectsRef)}
        />
        <Hero 
          aboutRef={aboutRef} 
          skillsRef={skillsRef} 
          projectsRef={projectsRef} 
        />
      </>
    );
}

export default Home;
