// FAQ.jsx
import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BuildIcon from '@mui/icons-material/Build';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '&.Mui-expanded': {
    margin: 'auto',
  },
  '& .MuiAccordionSummary-root': {
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiAccordionDetails-root': {
    transition: 'opacity 0.5s ease',
    opacity: 1,
  },
  '&.Mui-expanded .MuiAccordionDetails-root': {
    opacity: 1,
  },
}));

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Preguntas Frecuentes
      </Typography>
      <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <IconButton edge="start" color="primary" aria-label="info" sx={{ mr: 2 }}>
            <InfoIcon />
          </IconButton>
          <Typography variant="h6">¿Qué servicios ofrecen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ofrecemos una variedad de servicios incluyendo desarrollo de sitios web estáticos y dinámicos, diseño de UI/UX, optimización y mantenimiento web, entre otros.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <IconButton edge="start" color="primary" aria-label="payment" sx={{ mr: 2 }}>
            <PaymentIcon />
          </IconButton>
          <Typography variant="h6">¿Cuál es el costo de sus servicios?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El costo de nuestros servicios varía según el proyecto. Ofrecemos presupuestos personalizados basados en las necesidades específicas de cada cliente.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <IconButton edge="start" color="primary" aria-label="calendar" sx={{ mr: 2 }}>
            <CalendarTodayIcon />
          </IconButton>
          <Typography variant="h6">¿Cuánto tiempo toma desarrollar un sitio web?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El tiempo de desarrollo depende de la complejidad del proyecto. Un sitio web básico puede estar listo en unas pocas semanas, mientras que proyectos más complejos pueden tomar varios meses.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <IconButton edge="start" color="primary" aria-label="build" sx={{ mr: 2 }}>
            <BuildIcon />
          </IconButton>
          <Typography variant="h6">¿Ofrecen servicios de mantenimiento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sí, ofrecemos servicios de mantenimiento continuo para asegurar que su sitio web funcione correctamente y se mantenga actualizado.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Container>
  );
};

export default Faq;
