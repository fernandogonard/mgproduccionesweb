import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

const ContactCTA = () => (
  <Box
    sx={{
      backgroundColor: '#7b4e2f', // Color principal del tema
      color: 'white', // Texto blanco
      py: 5,
      textAlign: 'center',
      mt: 5,
    }}
  >
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom color="white">
        ¿Listo para Empezar?
      </Typography>
      <Typography variant="body1" paragraph>
        ¡Estamos aquí para ayudarte! Contáctanos para discutir tus necesidades y descubrir cómo podemos ayudarte a alcanzar tus metas. Estamos disponibles para responder todas tus preguntas y ofrecerte el mejor servicio.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="#contact"
        sx={{ color: 'white' }} // Texto blanco
      >
        Contáctenos
      </Button>
    </Container>
  </Box>
);

export default ContactCTA;
