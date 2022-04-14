import { createTheme } from '@mui/material/styles';

// https://material-ui.com/customization/palette/
export default createTheme({
  typography: {
    button: {
      textTransform: 'none'
    },
    h1: {
      fontSize: 50
    },
    h2: {
      fontSize: 38
    },
    h3: {
      fontSize: 32
    },
    h4: {
      fontSize: 26
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          boxSizing: 'border-box',
          margin: 0
        }
      }
    }
  }
});
