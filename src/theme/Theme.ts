import createTheme from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export default {
  appTheme: createTheme({
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
      }
    },
    direction: 'rtl',
    shape: {
      borderRadius: 4
    },
    components: {
      MuiTooltip: {
        defaultProps: {
          arrow: true
        }
      }
    }
  })
};
