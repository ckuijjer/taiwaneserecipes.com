import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import RecipeLinkedData from '../components/RecipeLinkedData'
import Hero from '../components/Hero'

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
            <Paper style={{ backgroundColor: '#f9f9f9' }} square>
              <Box padding={2}>
                {ingredients.length !== 0 && (
                  <>
                    <Typography variant="h4" component="h2" gutterBottom>
                      Ingredients
                    </Typography>
                    <ul style={{ paddingLeft: 40 }}>
                      {ingredients.map((ingredient) => (
                        <li>
                          <Typography variant="body1" gutterBottom>
                            {ingredient}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box padding={2}>
              {steps.length !== 0 && (
                <>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Steps
                  </Typography>
                  <ol style={{ paddingLeft: 40 }}>
                    {steps.map((step) => (
                      <li>
                        <Typography variant="body1" gutterBottom>
                          {step}
                        </Typography>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </Box>
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
