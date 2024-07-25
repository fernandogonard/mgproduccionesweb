import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';

const HeroText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
        mt: 4, // Añade margen superior para separar del video
        px: isMobile ? 2 : 4, // Añade padding horizontal en pantallas móviles
      }}
    >
      <Box>
        <Typography
          variant={isMobile ? 'h4' : 'h2'} // Ajusta el tamaño del texto en pantallas móviles
          gutterBottom
          sx={{ fontSize: isMobile ? '1.5rem' : '2.5rem' }} // Ajusta el tamaño de fuente manualmente
        >
          Desarrollamos Páginas Web Modernas y Responsivas
        </Typography>
        <Typography
          variant={isMobile ? 'h6' : 'h5'} // Ajusta el tamaño del texto en pantallas móviles
          sx={{ fontSize: isMobile ? '1rem' : '1.5rem' }} // Ajusta el tamaño de fuente manualmente
        >
          Transformamos tus ideas en realidad
        </Typography>
      </Box>
    </Container>
  );
};

export default HeroText;
