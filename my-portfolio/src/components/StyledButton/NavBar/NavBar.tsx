import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

interface NavBarProps {
    onAboutClick: () => void;
    onSkillsClick: () => void;
    onProjectsClick: () => void;
    translations: {
        navBarAbout: string; // Alterado
        navBarSkills: string; // Alterado
        navBarProjects: string; // Alterado
    };
}

const NavBar = ({ onAboutClick, onSkillsClick, onProjectsClick, translations }: NavBarProps) => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly',
    }));
    
    return (
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem onClick={onAboutClick}>{translations.navBarAbout}</MenuItem>
                <MenuItem onClick={onSkillsClick}>{translations.navBarSkills}</MenuItem>
                <MenuItem onClick={onProjectsClick}>{translations.navBarProjects}</MenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
