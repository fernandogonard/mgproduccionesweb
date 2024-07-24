import React from 'react';
import { Container, Typography, Grid, Paper, Avatar, Box, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const iconColor = 'primary.main';

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[6],
  },
}));

const FeatureIcon = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText, // Ajusta el color del texto (íconos) aquí
}));

const SummarySection = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    alignItems: 'center',
  },
}));

const BenefitBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& > .icon': {
    fontSize: 50,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
}));

const WhyChooseUs = () => (
  <Container maxWidth="lg" sx={{ mt: 8 }}>
    <Box textAlign="center" mb={6}>
      <Typography variant="h3" gutterBottom>
        ¿Por Qué Elegirnos?
      </Typography>
      <Typography variant="body1" paragraph>
        En [Nombre de tu Empresa], entendemos que un sitio web es más que una simple página en internet; es una herramienta poderosa para el crecimiento y éxito de su negocio. Nuestro equipo de expertos combina creatividad, tecnología y estrategia para ofrecer soluciones personalizadas que cumplen con sus objetivos específicos.
      </Typography>
    </Box>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FeatureCard elevation={3}>
            <FeatureIcon>
              <VisibilityIcon sx={{ fontSize: 40, color: 'inherit' }} />
            </FeatureIcon>
            <Typography variant="h5" gutterBottom mt={2}>
              Aumentar su Visibilidad
            </Typography>
            <Typography variant="body1">
              Amplíe su alcance y destaque en un mundo digital saturado. Le ayudamos a ser visible para una audiencia más amplia y diversificada.
            </Typography>
          </FeatureCard>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FeatureCard elevation={3}>
            <FeatureIcon>
              <MonetizationOnIcon sx={{ fontSize: 40, color: 'inherit' }} />
            </FeatureIcon>
            <Typography variant="h5" gutterBottom mt={2}>
              Generar Más Ventas
            </Typography>
            <Typography variant="body1">
              Transforme visitantes en clientes leales con un diseño optimizado para conversiones. Facilitamos el proceso de compra y contacto.
            </Typography>
          </FeatureCard>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FeatureCard elevation={3}>
            <FeatureIcon>
              <VerifiedIcon sx={{ fontSize: 40, color: 'inherit' }} />
            </FeatureIcon>
            <Typography variant="h5" gutterBottom mt={2}>
              Construir Credibilidad
            </Typography>
            <Typography variant="body1">
              Un sitio web profesional transmite confianza y demuestra su compromiso con la calidad y el servicio excepcional.
            </Typography>
          </FeatureCard>
        </motion.div>
      </Grid>
    </Grid>
    <SummarySection>
      <Typography variant="h4" gutterBottom>
        En Resumen
      </Typography>
      <Typography variant="body1" paragraph>
        Un sitio web bien diseñado no es solo una inversión, es la clave para desbloquear el potencial completo de su negocio. Permítanos ser su socio en la creación de una presencia en línea que impulse su éxito.
      </Typography>
      <Box textAlign="left" mt={4}>
        <Typography variant="h5" gutterBottom>
          Aquí están las razones para elegirnos:
        </Typography>
        <BenefitBox>
          <VisibilityIcon className="icon" />
          <Typography variant="body1">Creatividad sin límites.</Typography>
        </BenefitBox>
        <BenefitBox>
          <MonetizationOnIcon className="icon" />
          <Typography variant="body1">Tecnología avanzada para resultados óptimos.</Typography>
        </BenefitBox>
        <BenefitBox>
          <VerifiedIcon className="icon" />
          <Typography variant="body1">Estrategias efectivas que garantizan el éxito.</Typography>
        </BenefitBox>
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" size="large">
          Contáctenos
        </Button>
      </Box>
    </SummarySection>
  </Container>
);

export default WhyChooseUs;
