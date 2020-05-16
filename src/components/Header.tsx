import React from 'react'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const Header = ({ siteTitle }) => (
  <AppBar position="sticky" color="inherit" elevation={1}>
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

export default Header
