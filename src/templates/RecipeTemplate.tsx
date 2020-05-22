import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Img from 'gatsby-image'
import rehypeReact from 'rehype-react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import RecipeLinkedData from '../components/RecipeLinkedData'

const H1 = ({ children }) => (
  <Typography variant="h2" component="h1" gutterBottom>
    {children}
  </Typography>
)
const H2 = ({ children }) => (
  <Typography variant="h4" component="h2" gutterBottom>
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
          <Paper style={{ overflow: 'hidden' }} square>
            <Img fluid={image.childImageSharp.fluid} durationFadeIn={100} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

const RecipeTemplate = ({ data }) => {
  const {
    markdownRemark: { htmlAst, frontmatter, children },
    site: {
      siteMetadata: { author, siteUrl },
    },
  } = data

  const images = frontmatter?.images ?? []
  const featuredImage = frontmatter?.featuredImage
  const recipeMetadata = children[0]
  const { title } = recipeMetadata
  const totalTime = frontmatter?.totalTime
  const category = frontmatter?.category

  return (
    <Layout>
      <SEO title={title} />
      <RecipeLinkedData
        {...recipeMetadata}
        featuredImage={featuredImage}
        images={images}
        siteUrl={siteUrl}
        author={author}
        category={category}
        totalTime={totalTime}
      />
      {renderAst(htmlAst)}
      <Images images={images} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
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
        totalTime
        prepTime
        cookTime
        category
      }
      children {
        ... on Recipe {
          title
          ingredients
          steps
        }
      }
    }
  }
`

export default RecipeTemplate
