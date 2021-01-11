import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { ItemList, ListItem } from 'schema-dts'
import { JsonLd } from 'react-schemaorg'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import RecipeCard from '../components/RecipeCard'
import { withPrefix } from 'gatsby'
import Box from '@material-ui/core/Box'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allRecipe(limit: 1000, sort: { fields: fields___slug }) {
        edges {
          node {
            fields {
              slug
            }
            title
            prepTime
            cookTime
            totalTime
            category
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
            draft
          }
        }
      }
    }
  `)

  const recipes = data.allRecipe.edges
    .map(({ node }) => ({
      ...node,
      path: node.fields.slug,
      image:
        node.featuredImage?.childImageSharp?.fluid ||
        node.images?.[0].childImageSharp?.fluid,
    }))
    .sort((
      a,
      b, // recipes with images on top, and both groups alphabetically
    ) =>
      !!a.image === !!b.image
        ? a.title.localeCompare(b.title)
        : !!a.image
        ? -1
        : 1,
    )
    .filter((x) => !x.draft) // only keep the ones that are not draft (as google's rich text caroussel needs all items to be valid and a Recipe needs an image)

  return (
    <Layout>
      <SEO title="Home" />
      <RecipeItemListLinkedData
        recipes={recipes}
        siteUrl={data?.site?.siteMetadata?.siteUrl}
      />
      <Box marginLeft={-2} marginRight={-2}>
        <Grid container spacing={0} alignItems="stretch">
          {recipes.map((props) => (
            <Grid item container xs={12} sm={6} md={4} key={props.path}>
              <RecipeCard {...props} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

const RecipeItemListLinkedData = ({ recipes, siteUrl }) => (
  <JsonLd<ItemList>
    item={{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: recipes.map(
        (recipe, i): ListItem => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${siteUrl}${withPrefix(recipe.path)}`,
        }),
      ),
    }}
  />
)

export default IndexPage
