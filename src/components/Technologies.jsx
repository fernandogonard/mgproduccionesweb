// src/components/Technologies.jsx
import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

// Importar las imágenes
import reactImage from '../assets/react.png';
import jsImage from '../assets/JavaScript-logo.png';
import cssImage from '../assets/css.png';
import htmlImage from '../assets/html.png';
import nodeImage from '../assets/nodejs.png';
import mongoImage from '../assets/mongo.png';

// Mapa de imágenes tecnológicas
const technologyImages = {
  React: reactImage,
  JavaScript: jsImage,
  CSS: cssImage,
  HTML: htmlImage,
  'Node.js': nodeImage,
  'MongoDB': mongoImage
};

const TechnologyItem = ({ name }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }} // Mayor desplazamiento en Y
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }} // Ajustar duración y curva de tiempo
  >
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', m: 1, minWidth: 120 }}>
      <img 
        src={technologyImages[name]} 
        alt={name} 
        style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} 
      />
      <Typography variant="h6" sx={{ mt: 1 }}>{name}</Typography>
    </Paper>
  </motion.div>
);

const Technologies = () => (
  <Container maxWidth="lg" sx={{ mt: 5 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Tecnologías Utilizadas
    </Typography>
    <Box 
      display="flex" 
      flexWrap="wrap" 
      justifyContent="center" 
      alignItems="center"
    >
      {Object.keys(technologyImages).map((tech, index) => (
        <TechnologyItem key={index} name={tech} />
      ))}
    </Box>
  </Container>
);

export default Technologies;
