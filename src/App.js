import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography, Grid } from '@material-ui/core';
import { Public as PublicIcon } from '@material-ui/icons';
import muiTheme from './styles/light';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <PublicIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="h5" color="primary" align="center">
            Hello world
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
