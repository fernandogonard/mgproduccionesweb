import React from 'react';
import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { Web, Code, MobileFriendly, Speed, DesignServices, Build } from '@mui/icons-material'; // Agregar ícono de construcción
import { motion } from 'framer-motion';

// Servicios con un nuevo servicio agregado
const services = [
  {
    icon: <Web sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Desarrollo de Sitios Web Estáticos',
    description: 'Creación de páginas web con HTML y CSS para mostrar información fija. Diseño responsivo para asegurar que el sitio web se vea bien en dispositivos móviles y de escritorio.',
  },
  {
    icon: <Code sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Desarrollo de Aplicaciones Web Dinámicas',
    description: 'Implementación de aplicaciones interactivas utilizando JavaScript y React. Creación de interfaces de usuario modernas y reactivas. Gestión de estados y enrutamiento dentro de la aplicación.',
  },
  {
    icon: <MobileFriendly sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Desarrollo Frontend',
    description: 'Desarrollo de componentes de interfaz de usuario reutilizables en React. Integración de APIs para la obtención y envío de datos. Optimización del rendimiento y la accesibilidad del frontend.',
  },
  {
    icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Optimización y Mantenimiento Web',
    description: 'Mejora de la velocidad y el rendimiento del sitio web. Implementación de buenas prácticas de SEO básico para mejorar la visibilidad en motores de búsqueda. Corrección de errores y mantenimiento continuo del sitio web.',
  },
  {
    icon: <DesignServices sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Diseño y Desarrollo de Interfaces de Usuario (UI/UX)',
    description: 'Creación de diseños atractivos y funcionales para aplicaciones y sitios web. Implementación de principios de diseño centrado en el usuario y experiencia de usuario (UX).',
  },
  {
    icon: <Build sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Consultoría y Estrategia Digital',
    description: 'Asesoramiento en estrategias digitales para mejorar la presencia en línea y maximizar el impacto. Evaluación de necesidades tecnológicas y recomendación de soluciones personalizadas.',
  }
];

const ServiceItem = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', m: 1, minWidth: 280, minHeight: 320 }}>
      {icon}
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Paper>
  </motion.div>
);

const Services = () => (
  <Container id="services" maxWidth="lg" sx={{ mt: 5 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Nuestros Servicios
    </Typography>
    <Typography variant="body1" align="center" paragraph>
      Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades. Desde el diseño y desarrollo web hasta el marketing digital, nuestro equipo está aquí para ayudarle a alcanzar sus objetivos.
    </Typography>
    <Grid container spacing={4} sx={{ mt: 5 }}>
      {services.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <ServiceItem {...service} />
        </Grid>
      ))}
    </Grid>
    <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
      <Button variant="contained" color="primary" href="#contact">
        Contáctenos
      </Button>
    </Box>
  </Container>
);

export default Services;
