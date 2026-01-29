import { useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, IconButton, Drawer, Box, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Adicionado para melhor UX

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

    // Função para traduzir e fechar o menu com um pequeno delay para feedback visual
    const handleLanguageChange = () => {
        onToggleLanguage();
        // Não fechamos o drawer imediatamente para o usuário ver a troca do texto (ex: PT -> EN)
        setTimeout(() => {
            setMobileOpen(false);
        }, 300);
    };

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: isMobile ? 'flex-end' : 'center',
        gap: theme.spacing(isMobile ? 0 : 8),
    }));

    const NavMenuItem = styled(MenuItem)(({ theme }) => ({
        fontSize: '1.2rem', 
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: theme.palette.text.primary,
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(3, 0),
        '&:hover': { backgroundColor: 'transparent', color: theme.palette.primary.contrastText },
    }));

    const drawer = (
        <Box 
            sx={{ 
                height: '100%', 
                backgroundColor: 'rgba(10, 25, 47, 0.98)', 
                backdropFilter: 'blur(15px)',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            {/* Botão para fechar o menu no topo direito */}
            <IconButton 
                onClick={handleDrawerToggle}
                sx={{ position: 'absolute', top: 20, right: 20, color: 'primary.contrastText' }}
            >
                <CloseIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>

            <NavMenuItem onClick={() => { onAboutClick(); handleDrawerToggle(); }}>
                {translations.About}
            </NavMenuItem>
            <NavMenuItem onClick={() => { onSkillsClick(); handleDrawerToggle(); }}>
                {translations.Skills}
            </NavMenuItem>
            <NavMenuItem onClick={() => { onProjectsClick(); handleDrawerToggle(); }}>
                {translations.Projects}
            </NavMenuItem>
            
            <NavMenuItem 
                onClick={handleLanguageChange}
                sx={{ 
                    border: '2px solid', 
                    borderColor: 'primary.contrastText', 
                    borderRadius: '8px', 
                    maxWidth: '120px',
                    mt: 6,
                    py: 1.5,
                    color: 'primary.contrastText'
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
                            <MenuIcon sx={{ color: 'primary.contrastText', fontSize: '2.5rem' }} />
                        </IconButton>
                    ) : (
                        <>
                            <NavMenuItem onClick={onAboutClick}>{translations.About}</NavMenuItem>
                            <NavMenuItem onClick={onSkillsClick}>{translations.Skills}</NavMenuItem>
                            <NavMenuItem onClick={onProjectsClick}>{translations.Projects}</NavMenuItem>
                            <NavMenuItem 
                                onClick={onToggleLanguage}
                                sx={{ border: '1px solid', borderColor: 'primary.contrastText', borderRadius: '4px', px: 2, ml: 4 }}
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
                        width: '100%', 
                        backgroundColor: 'transparent',
                        backgroundImage: 'none'
                    } 
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default NavBar;