import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import RecipeLinkedData from '../components/RecipeLinkedData'
import Hero from '../components/Hero'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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

const Ingredient = ({ children }) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <div
      style={{
        cursor: 'pointer',
        textDecoration: checked ? 'line-through' : 'none',
        borderLeft: checked ? `6px solid #000` : null,
        // paddingLeft: checked ? 10 : 16,
        paddingLeft: checked ? 18 : 24,
      }}
      onClick={() => setChecked(!checked)}
    >
      <Typography
        variant="body1"
        style={{ lineHeight: 1.777, paddingBottom: 9 }}
      >
        {children}
      </Typography>
    </div>
  )
}

const Ingredients = ({ ingredients }) => (
  <>
    <Typography variant="h4" component="h2" gutterBottom>
      Ingredients
    </Typography>
    <div style={{ borderLeft: `1px solid #000` }}>
      {ingredients.map((ingredient) => (
        <Ingredient>{ingredient}</Ingredient>
      ))}
    </div>
  </>
)

const Steps = ({ steps }) => (
  <>
    <Typography variant="h4" component="h2" gutterBottom>
      Steps
    </Typography>
    <ol style={{ paddingLeft: 24 }}>
      {steps.map((step) => (
        <li>
          <Typography
            variant="body1"
            gutterBottom
            style={{ lineHeight: 1.777, marginBottom: 12 }}
          >
            {step}
          </Typography>
        </li>
      ))}
    </ol>
  </>
)

const RecipeTemplate = ({ data }) => {
  const {
    recipe,
    site: {
      siteMetadata: { author, siteUrl },
    },
  } = data

  const {
    featuredImage,
    title,
    totalTime,
    category,
    steps = [],
    ingredients = [],
  } = recipe

  const images = recipe.images ?? []

  return (
    <Layout>
      <SEO title={title} />
      <RecipeLinkedData
        featuredImage={featuredImage}
        images={images}
        siteUrl={siteUrl}
        author={author}
        category={category}
        title={title}
        steps={steps}
        ingredients={ingredients}
        totalTime={totalTime}
      />
      <Box mb={4}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </Box>
      {featuredImage && (
        <Box mb={6}>
          <Hero image={featuredImage} />
        </Box>
      )}
      <Box mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            {ingredients.length !== 0 && (
              <Ingredients ingredients={ingredients} />
            )}
          </Grid>
          <Grid item xs={12} md={8}>
            {steps.length !== 0 && <Steps steps={steps} />}
          </Grid>
        </Grid>
      </Box>
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
    recipe(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
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
      title
      ingredients
      steps
    }
  }
`

export default RecipeTemplate
