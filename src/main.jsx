import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Importa el tema desde el archivo separado
import './App.css';
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <div className="blur-overlay" />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('No se encontró un elemento con el id "root". Asegúrate de que el HTML contenga un contenedor con este id.');
}
