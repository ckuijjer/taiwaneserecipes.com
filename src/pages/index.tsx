import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import { ItemList, ListItem } from 'schema-dts'
import { JsonLd } from 'react-schemaorg'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import RecipeCard from '../components/RecipeCard'
import { withPrefix } from 'gatsby'

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
    .filter((x) => !!x.image) // only keep the ones with an image (as google's rich text caroussel needs all items to be valid and a Recipe needs an image)

  return (
    <Layout>
      <SEO title="Home" />
      <RecipeItemListLinkedData
        recipes={recipes}
        siteUrl={data?.site?.siteMetadata?.siteUrl}
      />
      <Grid container spacing={2} alignItems="stretch">
        {recipes.map((props) => (
          <Grid item container xs={12} md={4} key={props.path}>
            <RecipeCard {...props} />
          </Grid>
        ))}
      </Grid>
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
