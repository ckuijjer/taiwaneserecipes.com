import React from 'react'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Img from 'gatsby-image'

const Hero = ({ title, image, style = {} }) => (
  <div style={{ ...style, padding: 0, height: 400, position: 'relative' }}>
    <Img
      fluid={image.childImageSharp.fluid}
      style={{ width: '100%', height: '100%' }}
      objectFit="cover"
      objectPosition="bottom left"
    />
    <Container
      //   maxWidth="lg"
      //   container
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
      }}
      alignItems="stretch"
    >
      <Grid container alignItems="center">
        <Grid md={9} item>
          {/* <Paper> */}
          <Box p={4}>
            <Box mb={4}>
              <Typography
                variant="h1"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  //   fontFamily: 'Open Sans',
                  textShadow:
                    '-3px -3px 3px rgba(255,255,255,.1), 3px 3px 3px rgba(0,0,0,.5)',
                }}
              >
                {/* {title} */}
              </Typography>
            </Box>
          </Box>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
  </div>
)

export default Hero
