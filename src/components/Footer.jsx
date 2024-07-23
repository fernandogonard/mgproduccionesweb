import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email } from '@mui/icons-material';

// Paleta de colores azul
const blueColors = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: blueColors[600], // Fondo oscuro azul
        color: blueColors[50], // Texto claro
        py: 6, // Mayor espacio vertical
        mt: 'auto',
        borderTop: `1px solid ${blueColors[700]}`, // Borde superior azul más claro
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body1" paragraph>
              Dirección: 123 Calle Principal, Ciudad, País
            </Typography>
            <Typography variant="body1" paragraph>
              Teléfono: (123) 456-7890
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:contacto@tusitio.com" color={blueColors[50]} underline="hover">
                Email: contacto@tusitio.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="#" color={blueColors[50]} variant="body1" underline="hover">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" color={blueColors[50]} variant="body1" underline="hover">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#" color={blueColors[50]} variant="body1" underline="hover">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" color={blueColors[50]} variant="body1" underline="hover">
                  Contacto
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://facebook.com" 
                aria-label="Facebook"
                sx={{ 
                  '&:hover': {
                    color: blueColors[900], 
                    transform: 'scale(1.2)', 
                    transition: 'transform 0.3s, color 0.3s'
                  } 
                }}
              >
                <Facebook sx={{ fontSize: 30, color: blueColors[50] }} />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://twitter.com" 
                aria-label="Twitter"
                sx={{ 
                  '&:hover': {
                    color: blueColors[900], 
                    transform: 'scale(1.2)', 
                    transition: 'transform 0.3s, color 0.3s'
                  } 
                }}
              >
                <Twitter sx={{ fontSize: 30, color: blueColors[50] }} />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://instagram.com" 
                aria-label="Instagram"
                sx={{ 
                  '&:hover': {
                    color: blueColors[900], 
                    transform: 'scale(1.2)', 
                    transition: 'transform 0.3s, color 0.3s'
                  } 
                }}
              >
                <Instagram sx={{ fontSize: 30, color: blueColors[50] }} />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="https://linkedin.com" 
                aria-label="LinkedIn"
                sx={{ 
                  '&:hover': {
                    color: blueColors[900], 
                    transform: 'scale(1.2)', 
                    transition: 'transform 0.3s, color 0.3s'
                  } 
                }}
              >
                <LinkedIn sx={{ fontSize: 30, color: blueColors[50] }} />
              </IconButton>
              <IconButton 
                color="inherit" 
                component="a" 
                href="mailto:contacto@tusitio.com" 
                aria-label="Email"
                sx={{ 
                  '&:hover': {
                    color: blueColors[900], 
                    transform: 'scale(1.2)', 
                    transition: 'transform 0.3s, color 0.3s'
                  } 
                }}
              >
                <Email sx={{ fontSize: 30, color: blueColors[50] }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body1" color={blueColors[50]}>
            © {new Date().getFullYear()} Tu Sitio Web. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
