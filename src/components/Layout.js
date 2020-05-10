import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

import Header from './Header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container maxWidth="md">
        <Box marginTop={8}>{children}</Box>
      </Container>
    </>
  )
}

export default Layout
