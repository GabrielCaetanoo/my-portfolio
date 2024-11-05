import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

interface NavBarProps {
    onAboutClick: () => void;
    onSkillsClick: () => void;
    onProjectsClick: () => void;
    translations: {
        About: string; // Alterado
        Skills: string; // Alterado
        Projects: string; // Alterado
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
                <MenuItem onClick={onAboutClick}>{translations.About}</MenuItem>
                <MenuItem onClick={onSkillsClick}>{translations.Skills}</MenuItem>
                <MenuItem onClick={onProjectsClick}>{translations.Projects}</MenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
