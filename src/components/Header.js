import React from 'react'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import rijstplannerLogo from '../images/rijstplanner-logo.svg'

const Header = ({ siteTitle }) => (
  <AppBar position="sticky" color="default">
    <Toolbar>
      <Container maxWidth="md">
        <Box display="flex" flexDirection="row" alignItems="center">
          {/* <Box marginRight={2}>
            <img src={rijstplannerLogo} />
          </Box> */}
          <Link to="/" style={{ textDecoration: 'none', color: 'initial' }}>
            <Typography variant="h6" color="secondary">
              {/* {siteTitle} */}
              Taiwanese Recipes 🇹🇼🤤
            </Typography>
          </Link>
        </Box>
      </Container>
    </Toolbar>
  </AppBar>
)

export default Header
