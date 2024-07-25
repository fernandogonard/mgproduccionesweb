import React from 'react';
import { Box, Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => (
  <Box
    sx={{
      position: 'fixed',
      bottom: 16,
      right: 16,
      zIndex: 1000,
    }}
  >
    <Fab
      color="primary"
      aria-label="WhatsApp"
      href="https://wa.me/+5492235203369?text=Hola%2C%20me%20interesa%20su%20servicio.%20%3A)"
      target="_blank"
    >
      <WhatsAppIcon />
    </Fab>
  </Box>
);

export default WhatsAppButton;
