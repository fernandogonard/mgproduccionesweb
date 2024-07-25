import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactForm = () => (
  <Container maxWidth="lg" sx={{ mt: 10, mb: 6 }} id="contact">
    <Typography variant="h4" align="center" gutterBottom>
      Contáctenos
    </Typography>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="name"
        label="Nombre"
        variant="outlined"
      />
      <TextField
        required
        id="email"
        label="Correo Electrónico"
        variant="outlined"
      />
      <TextField
        required
        id="message"
        label="Mensaje"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        Enviar
      </Button>
    </Box>
  </Container>
);

export default ContactForm;
