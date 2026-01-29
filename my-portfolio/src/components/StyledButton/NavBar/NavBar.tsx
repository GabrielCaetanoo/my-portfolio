import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"; // Box removido daqui

interface NavBarProps {
    onAboutClick: () => void;
    onSkillsClick: () => void;
    onProjectsClick: () => void;
    translations: {
        About: string;
        Skills: string;
        Projects: string;
    };
}

const NavBar = ({ onAboutClick, onSkillsClick, onProjectsClick, translations }: NavBarProps) => {
    
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            gap: theme.spacing(8),
        },
    }));

    const NavMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.text.primary,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.contrastText,
            transform: 'translateY(-2px)',
        },
    }));

    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                backgroundColor: 'rgba(10, 25, 47, 0.8)', 
                backdropFilter: 'blur(12px)', 
                boxShadow: 'none',
                borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
                top: 0,
            }}
        >
            <StyledToolbar>
                <NavMenuItem onClick={onAboutClick}>
                    {translations.About}
                </NavMenuItem>
                <NavMenuItem onClick={onSkillsClick}>
                    {translations.Skills}
                </NavMenuItem>
                <NavMenuItem onClick={onProjectsClick}>
                    {translations.Projects}
                </NavMenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;