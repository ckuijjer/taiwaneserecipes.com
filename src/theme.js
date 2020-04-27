import {
  createMuiTheme,
  colors as muiColors,
  responsiveFontSizes,
} from '@material-ui/core'

export const colors = {
  primary: '#ffc917',
  secondary: '#0063d3',
  secondaryDark: '#003082',
  textColor: '#070721',
  error: '#db0029',
}

// A custom theme for this app
let theme = createMuiTheme({
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
  overrides: {
    MuiAppBar: {},
  },
})

export default responsiveFontSizes(theme)
