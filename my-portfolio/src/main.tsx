import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts';
// Ícones das tecnologias: versão do package.json, sem depender de CDN
import 'devicon/devicon.min.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
