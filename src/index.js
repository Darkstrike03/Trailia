import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new ReactDOM API
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Global styles (your own CSS still works)
import './index.css';

// Import MUI theming utilities
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Optional: you can keep the plain material-icons CSS if you want to use
// <span className="material-icons">home</span> style icons:
import 'material-icons/iconfont/material-icons.css';

// Create a custom Material UI theme
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2', // change to match your brand color
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline gives you a nice Material-style reset */}
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
