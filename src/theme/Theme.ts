// TODO: Import SCSS theme variables here

import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#0c31ff',
      '50': '#eee7ff',
      '100': '#d1c5ff',
      '200': '#b09eff',
      '300': '#8a75ff',
      '400': '#6755ff',
      '500': '#3235ff',
      '600': '#0c31ff',
      '700': '#0029f7',
      '800': '#0024f2',
      '900': '#0018ed'
    },
    secondary: {
      main: '#ffdb0c',
      '50': '#fffde6',
      '100': '#fffac0',
      '200': '#fff695',
      '300': '#fdf169',
      '400': '#fbed41',
      '500': '#f8e800',
      '600': '#ffdb0c',
      '700': '#ffc200',
      '800': '#ffa900',
      '900': '#fe7c00'
    },
    grey: {
      '50': '#ffffff',
      '100': '#fafafa',
      '200': '#f5f5f5',
      '300': '#f0f0f0',
      '400': '#dedede',
      '500': '#c2c2c2',
      '600': '#979797',
      '700': '#818181',
      '800': '#606060',
      '900': '#3c3c3c'
    },
    background: {
      default: '#303030',
      paper: '#1f1f1f'
    },
    common: {
      white: '#fff'
    }
  },
  direction: 'rtl',
  shape: {
    borderRadius: 4
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
          backgroundColor: baseTheme.palette.grey[900]
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${baseTheme.palette.grey[800]}`
        },
        title: {
          color: baseTheme.palette.common.white
        },
        subheader: {
          color: baseTheme.palette.grey[600]
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          fontFamily: baseTheme.typography.fontFamily
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.primary.main,
          color: baseTheme.palette.common.white,
          // Alternate style
          // backgroundColor: baseTheme.palette.common.white,
          // color: baseTheme.palette.primary.dark,
          // border: `2px solid ${baseTheme.palette.primary.dark}`,
          ':hover': {
            backgroundColor: baseTheme.palette.primary.light
          }
        },
        colorPrimary: baseTheme.palette.primary.dark,
        sizeSmall: 30,
        sizeMedium: 50,
        sizeLarge: 70
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${baseTheme.palette.grey[800]}`
        }
      }
    }
  }
} as ThemeOptions);

export default appTheme;
