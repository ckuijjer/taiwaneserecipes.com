import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'
import SEO from '../components/Seo'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const recipes = data.allMarkdownRemark.edges.map(({ node }) => ({
    title: node.headings[0].value,
    slug: node.fields.slug,
  }))

  return (
    <Layout>
      <SEO title="Home" />
      <Typography variant="h2" component="h1" color="secondary">
        Recipes
      </Typography>
      <ul>
        {recipes.map(({ slug, title }) => (
          <li>
            <Typography variant="body1">
              <Link to={slug}>{title}</Link>
            </Typography>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
