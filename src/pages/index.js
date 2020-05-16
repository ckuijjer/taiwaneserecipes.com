import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import RecipeCard from '../components/RecipeCard'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
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
        (node &&
          node.frontmatter &&
          node.frontmatter.featuredImage &&
          node.frontmatter.featuredImage.childImageSharp &&
          node.frontmatter.featuredImage.childImageSharp.fluid) ||
        (node &&
          node.frontmatter &&
          node.frontmatter.images &&
          node.frontmatter.images[0].childImageSharp &&
          node.frontmatter.images[0].childImageSharp.fluid),
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

export default IndexPage
