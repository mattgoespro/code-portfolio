import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#283593'
    },
    secondary: {
      main: '#ff9800'
    },
    grey: {},
    background: {},
    common: {
      white: '#fff',
      black: '#18181b'
    }
  },
  direction: 'rtl',
  shape: {
    borderRadius: 5
  }
});

const appTheme = createTheme(baseTheme, {
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: baseTheme.palette.secondary.main
      }
    }
  }
} as ThemeOptions);

export default appTheme;
