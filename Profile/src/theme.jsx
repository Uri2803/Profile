// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Merriweather, serif', // Chỉnh sửa fontFamily ở đây

  },
  palette: {
    primary: {
      main: '#1E90FF',
    },
    secondary: {
      main: '#4B0082',
    },
  },
    
  
  background: {
    default: 'radial-gradient(circle, #22a2c5, #4da2c7, #68a3c6, #7ca4c4, #8da5c1, #8ca1c1, #8b9dc0, #8c98bf, #828bc0, #7c7ec0, #7a6fbd, #7b5fb9)',
  },
});

export default theme;
