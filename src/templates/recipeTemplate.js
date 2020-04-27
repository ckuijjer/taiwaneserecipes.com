import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import rehypeReact from 'rehype-react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'

const H1 = ({ children }) => (
  <Typography variant="h2" component="h1" color="secondary" gutterBottom>
    {children}
  </Typography>
)
const H2 = ({ children }) => (
  <Typography variant="h4" component="h2" color="secondary" gutterBottom>
    {children}
  </Typography>
)
const P = ({ children }) => <Typography variant="body1">{children}</Typography>
const Li = ({ children }) => (
  <li>
    <Typography variant="body1" gutterBottom>
      {children}
    </Typography>
  </li>
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    p: P,
    li: Li,
  },
}).Compiler

const Images = ({ images = [] }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <Grid item xs={12} md={4} key={image.childImageSharp.fluid.src}>
          <Paper style={{ overflow: 'hidden' }}>
            <Img fluid={image.childImageSharp.fluid} durationFadeIn={100} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

const RecipeTemplate = ({ data }) => {
  const {
    markdownRemark: { htmlAst, frontmatter },
  } = data

  const images = (frontmatter && frontmatter.images) || []

  return (
    <Layout>
      {renderAst(htmlAst)}
      <Images images={images} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default RecipeTemplate
