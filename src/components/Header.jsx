import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoDesktop from '../assets/golden.png';
import logoMobile from '../assets/golden.png';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={isMobile ? logoMobile : logoDesktop}
            alt="MG Soluciones Web"
            style={{ height: isMobile ? '60px' : '100px' }}
          />
        </Box>
        {isMobile ? (
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box>
            <Button color="inherit" href="#about">
              Sobre Nosotros
            </Button>
            <Button color="inherit" href="#services">
              Servicios
            </Button>
            <Button color="inherit" href="#faq">
              Faq
            </Button>
            <Button color="inherit" href="#contact">
              Contacto
            </Button>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <List>
          <ListItem button onClick={handleDrawerClose} component="a" href="#about">
            <ListItemText primary="Sobre Nosotros" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="#services">
            <ListItemText primary="Servicios" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="#faq">
            <ListItemText primary="Faq" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component="a" href="#contact">
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
