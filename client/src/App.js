import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './navigation';
import ScrollToTop from './ScrollToTop';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// Components
import AppBar from './navigation/AppBar';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <AppBar />
          <Navigation />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
