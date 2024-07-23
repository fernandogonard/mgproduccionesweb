import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const AboutUsPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s, box-shadow 0.3s',
  backgroundColor: theme.palette.background.paper, // Color de fondo para Paper
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
  },
}));

const AboutUs = () => (
  <Container maxWidth="lg" sx={{ mt: 5 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Sobre Nosotros
    </Typography>
    <AboutUsPaper elevation={3}>
      <Typography variant="h5" gutterBottom>
        Nuestra Misión
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
        En [Nombre de tu Empresa], nos dedicamos a ofrecer soluciones digitales innovadoras que impulsan el éxito de nuestros clientes. Nuestro equipo está formado por apasionados profesionales que combinan creatividad y tecnología para proporcionar resultados excepcionales.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Nuestro Enfoque
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
        Creemos en la colaboración cercana con nuestros clientes para entender a fondo sus necesidades y objetivos. Cada proyecto es una oportunidad para construir algo único y valioso. Trabajamos con un enfoque personalizado para garantizar que cada solución esté alineada con las expectativas y aspiraciones de nuestros clientes.
      </Typography>
      <Typography variant="h5" gutterBottom>
        ¿Por Qué Elegirnos?
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
        Nuestro compromiso con la calidad, la innovación y la satisfacción del cliente nos distingue en el mercado. Nos enorgullece ofrecer un servicio excepcional y resultados que superan las expectativas. Ya sea que necesite un sitio web atractivo, una estrategia digital efectiva o una solución a medida, estamos aquí para hacer realidad su visión.
      </Typography>
    </AboutUsPaper>
  </Container>
);

export default AboutUs;
