import React from 'react';
import { Box } from '@mui/material';
import backgroundVideo from '../assets/presentacion.mp4'; // Importa el video desde la carpeta assets

const HeroSection = () => (
  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
    <video autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  </Box>
);

export default HeroSection;
