import React from 'react'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    // backdropFilter: 'blur(10px) saturate(100%) contrast(55%) brightness(130%)',
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      className={classes.root}
    >
      <Toolbar>
        <Container maxWidth="md">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'initial' }}>
              <Typography variant="h6">{siteTitle}</Typography>
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
