import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email } from '@mui/icons-material';

// Nueva paleta de colores
const blueColors = {
  50: '#f8f4e3',  // Blanco
  100: '#e9d8a6',
  200: '#d8b74a',
  300: '#c2a13e',
  400: '#a97b2c',
  500: '#8c5e2f',
  600: '#7b4e2f',
  700: '#6a3d28',
  800: '#5a2d1f',
  900: '#3e1b11',
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: blueColors[600], // Fondo oscuro azul
        color: blueColors[50], // Texto blanco
        py: 6, // Mayor espacio vertical
        mt: 'auto',
        borderTop: `1px solid ${blueColors[700]}`, // Borde superior azul más claro
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: blueColors[50] }}>
              Contacto
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: blueColors[50] }}>
              Dirección: Mar del Plata, Argentina
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: blueColors[50] }}>
              Teléfono: +54 9(223)5203369
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:contacto@tusitio.com" color={blueColors[50]} underline="hover">
                Email: matiasgonard1@gmail.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: blueColors[50] }}>
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
            <Typography variant="h6" gutterBottom sx={{ color: blueColors[50] }}>
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
            © {new Date().getFullYear()} Soluciones Web. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
