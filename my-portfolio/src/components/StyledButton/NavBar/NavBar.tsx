import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

interface NavBarProps {
    onAboutClick: () => void;
    onSkillsClick: () => void;
    onProjectsClick: () => void;
}

const NavBar = ({ onAboutClick, onSkillsClick, onProjectsClick }: NavBarProps) => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: 'flex',
        justifyContent: 'space-evenly',
    }));
    
    return (
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem onClick={onAboutClick}>About</MenuItem>
                <MenuItem onClick={onSkillsClick}>Skills</MenuItem>
                <MenuItem onClick={onProjectsClick}>Projects</MenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
