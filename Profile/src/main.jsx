import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
`;

const theme = {
  background: 'radial-gradient(circle, #22a2c5, #4da2c7, #68a3c6, #7ca4c4, #8da5c1, #8ca1c1, #8b9dc0, #8c98bf, #828bc0, #7c7ec0, #7a6fbd, #7b5fb9)',
  textColor: '#333333',
  primaryColor: '#1E90FF',
  secondaryColor: '#4B0082',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <App />
    </ThemeProvider>
  </React.StrictMode>
)
