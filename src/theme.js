import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

export const colors = {
  primary: '#ffc917',
  secondary: '#0063d3',
  secondaryDark: '#003082',
  textColor: '#070721',
  error: '#db0029',
  grey: '#e6e6e9',
}

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondaryDark,
    },
    error: {
      main: colors.error,
    },
    text: {
      primary: colors.textColor,
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
