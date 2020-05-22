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
      allMarkdownRemark(limit: 1000, sort: { fields: fields___slug }) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
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
      }
    }
  `)

  const recipes = data.allMarkdownRemark.edges
    .map(({ node }) => ({
      title: node.headings[0].value,
      path: node.fields.slug,
      image:
        node?.frontmatter?.featuredImage?.childImageSharp?.fluid ||
        node?.frontmatter?.images?.[0].childImageSharp?.fluid,
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

  return (
    <Layout>
      <SEO title="Home" />
      <RecipeItemListLinkedData
        recipes={recipes}
        siteUrl={data?.site?.siteMetadata?.siteUrl}
      />
      <Grid container spacing={2}>
        {recipes.map((props) => (
          <Grid item xs={12} md={4} key={props.path}>
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
