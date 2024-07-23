import { createTheme } from '@mui/material/styles';
import { greyColors, blueColors } from './components/themeConstants'; 

const theme = createTheme({
  palette: {
    primary: {
      main: blueColors[500],
      contrastText: '#fff',
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      contrastText: '#fff',
    },
    grey: greyColors,
    background: {
      default: greyColors[50],
    },
  },
});

export default theme;