import { useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, IconButton, Drawer, Box, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface NavBarProps {
    onAboutClick: () => void;
    onSkillsClick: () => void;
    onProjectsClick: () => void;
    onToggleLanguage: () => void;
    translations: {
        About: string;
        Skills: string;
        Projects: string;
        languageToggle: string;
    };
}

const NavBar = ({ onAboutClick, onSkillsClick, onProjectsClick, onToggleLanguage, translations }: NavBarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    // Função corrigida para garantir que a tradução reflita em todo o site
    const handleLanguageChange = () => {
        onToggleLanguage();
        // Pequeno delay para o usuário ver a transição do texto no menu antes dele fechar
        setTimeout(() => setMobileOpen(false), 300);
    };

    const NavMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: '1.2rem',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: theme.palette.text.primary,
        justifyContent: 'center', // Garante o alinhamento central do texto
        width: '100%',
        padding: theme.spacing(3, 0),
        '&:hover': { backgroundColor: 'transparent', color: theme.palette.primary.contrastText },
    }));

    const drawer = (
        <Box sx={{ 
            height: '100%', 
            backgroundColor: 'rgba(10, 25, 47, 0.98)', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', // Centralização horizontal
            justifyContent: 'center', // Centralização vertical
            position: 'relative'
        }}>
            <IconButton 
                onClick={handleDrawerToggle} 
                sx={{ position: 'absolute', top: 20, right: 20, color: 'primary.contrastText' }}
            >
                <CloseIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>

            <NavMenuItem onClick={() => { onAboutClick(); handleDrawerToggle(); }}>{translations.About}</NavMenuItem>
            <NavMenuItem onClick={() => { onSkillsClick(); handleDrawerToggle(); }}>{translations.Skills}</NavMenuItem>
            <NavMenuItem onClick={() => { onProjectsClick(); handleDrawerToggle(); }}>{translations.Projects}</NavMenuItem>
            
            <NavMenuItem 
                onClick={handleLanguageChange}
                sx={{ 
                    border: '2px solid', 
                    borderColor: 'primary.contrastText', 
                    borderRadius: '8px', 
                    maxWidth: '120px', 
                    mt: 6, 
                    color: 'primary.contrastText',
                    py: 1.5 
                }}
            >
                {translations.languageToggle}
            </NavMenuItem>
        </Box>
    );

    return (
        <>
            <AppBar 
                position="fixed" 
                sx={{ 
                    backgroundColor: 'rgba(10, 25, 47, 0.85)', 
                    backdropFilter: 'blur(12px)', 
                    boxShadow: 'none',
                    zIndex: (theme) => theme.zIndex.drawer + 1 
                }}
            >
                <Toolbar sx={{ justifyContent: isMobile ? 'flex-end' : 'center', gap: isMobile ? 0 : 8 }}>
                    {isMobile ? (
                        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon sx={{ color: 'primary.contrastText', fontSize: '2.5rem' }} />
                        </IconButton>
                    ) : (
                        <>
                            <NavMenuItem onClick={onAboutClick} sx={{ width: 'auto' }}>{translations.About}</NavMenuItem>
                            <NavMenuItem onClick={onSkillsClick} sx={{ width: 'auto' }}>{translations.Skills}</NavMenuItem>
                            <NavMenuItem onClick={onProjectsClick} sx={{ width: 'auto' }}>{translations.Projects}</NavMenuItem>
                            <NavMenuItem 
                                onClick={onToggleLanguage} 
                                sx={{ 
                                    border: '1px solid', 
                                    borderColor: 'primary.contrastText', 
                                    borderRadius: '4px', 
                                    px: 2, 
                                    ml: 4,
                                    width: 'auto'
                                }}
                            >
                                {translations.languageToggle}
                            </NavMenuItem>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer 
                variant="temporary" 
                anchor="right" 
                open={mobileOpen} 
                onClose={handleDrawerToggle} 
                sx={{ '& .MuiDrawer-paper': { width: '100%', backgroundColor: 'transparent' } }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default NavBar;