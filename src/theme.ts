import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

import shadows from './shadows'

// A custom theme for this app
const theme = createMuiTheme({
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
  typography: {
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
    h1: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
      // fontSize: '4.5rem',
    },
    h2: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Playfair Display',
      fontWeight: 700,
    },
    subtitle2: {
      color: grey[500],
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  shadows,
  overrides: {
    MuiAppBar: {},
    MuiFormControlLabel: {
      root: {
        alignItems: 'flex-start',
      },
      label: {
        paddingTop: 9,
        paddingBottom: 9,
      },
    },
  },
})

export default responsiveFontSizes(theme)
