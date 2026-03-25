import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Next.js 16 + Material UI Boilerplate</h1>
    </ThemeProvider>
  );
};

export default App;