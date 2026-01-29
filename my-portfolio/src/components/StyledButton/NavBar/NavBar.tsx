import { useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, IconButton, Drawer, Box, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: isMobile ? 'flex-end' : 'center',
        gap: theme.spacing(isMobile ? 0 : 8),
    }));

    const NavMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: '1rem', // Aumentado levemente para melhor toque no mobile
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 500,
        color: theme.palette.text.primary,
        justifyContent: 'center', // Centraliza o texto dentro do item
        width: '100%',
        padding: theme.spacing(2, 0),
        '&:hover': { backgroundColor: 'transparent', color: theme.palette.primary.contrastText },
    }));

    // Conteúdo do Menu Lateral (Drawer) com Alinhamento Centralizado
    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ 
                height: '100%', 
                backgroundColor: 'rgba(10, 25, 47, 0.98)', // Levemente mais opaco para legibilidade
                backdropFilter: 'blur(10px)',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', // Centraliza verticalmente
                alignItems: 'center',     // Centraliza horizontalmente
                gap: 2 
            }}
        >
            <NavMenuItem onClick={onAboutClick}>{translations.About}</NavMenuItem>
            <NavMenuItem onClick={onSkillsClick}>{translations.Skills}</NavMenuItem>
            <NavMenuItem onClick={onProjectsClick}>{translations.Projects}</NavMenuItem>
            
            <NavMenuItem 
                onClick={onToggleLanguage}
                sx={{ 
                    border: '1px solid', 
                    borderColor: 'primary.contrastText', 
                    borderRadius: '4px', 
                    maxWidth: '100px', // Botão de idioma com largura controlada
                    mt: 4,
                    py: 1
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
                    borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <StyledToolbar>
                    {isMobile ? (
                        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon sx={{ color: 'primary.contrastText', fontSize: '2.2rem' }} />
                        </IconButton>
                    ) : (
                        <>
                            <NavMenuItem onClick={onAboutClick}>{translations.About}</NavMenuItem>
                            <NavMenuItem onClick={onSkillsClick}>{translations.Skills}</NavMenuItem>
                            <NavMenuItem onClick={onProjectsClick}>{translations.Projects}</NavMenuItem>
                            <NavMenuItem 
                                onClick={onToggleLanguage}
                                sx={{ border: '1px solid', borderColor: 'primary.contrastText', borderRadius: '4px', px: 1.5, ml: 4 }}
                            >
                                {translations.languageToggle}
                            </NavMenuItem>
                        </>
                    )}
                </StyledToolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{ 
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: '100%', // Agora ocupa a tela toda no mobile para um look moderno
                        backgroundColor: 'transparent' 
                    } 
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default NavBar;