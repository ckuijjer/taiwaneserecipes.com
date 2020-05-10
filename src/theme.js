import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// export const colors = {
//   primary: '#ffc917',
//   secondary: '#0063d3',
//   secondaryDark: '#003082',
//   textColor: '#070721',
//   error: '#db0029',
//   grey: '#e6e6e9',
// }

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Playfair Display',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Playfair Display',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Playfair Display',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Playfair Display',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Playfair Display',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Playfair Display',
      fontWeight: 400,
    },
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    // primary: {
    //   main: colors.primary,
    // },
    // secondary: {
    //   main: colors.secondaryDark,
    // },
    // error: {
    //   main: colors.error,
    // },
    // text: {
    //   primary: colors.textColor,
    // },
    background: {
      default: '#fff',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiAppBar: {},
  },
})

export default responsiveFontSizes(theme)
