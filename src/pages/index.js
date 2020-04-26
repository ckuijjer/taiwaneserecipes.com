import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {recipes.map(({ slug, title }) => (
          <li>
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
