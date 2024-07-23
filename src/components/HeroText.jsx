import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroText = () => (
  <Container
    maxWidth="lg"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      textAlign: 'center',
      mt: 4, // Añade margen superior para separar del video
    }}
  >
    <Box>
      <Typography variant="h2" gutterBottom>
        Desarrollamos Páginas Web Modernas y Responsivas
      </Typography>
      <Typography variant="h5">
        Transformamos tus ideas en realidad
      </Typography>
    </Box>
  </Container>
);

export default HeroText;
