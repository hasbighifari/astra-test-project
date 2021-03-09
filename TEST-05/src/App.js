
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import NoAuthentication from '../src/router/NoAuthentication'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Snackbar from './components/snackbar/Snackbar';
import theme from './assets/theme/index'


function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <NoAuthentication />
        {/* <Authentication /> */}
        <Snackbar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
