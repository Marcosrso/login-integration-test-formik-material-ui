import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Login from './pages/Login';
import muiTheme from './styles/light';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
