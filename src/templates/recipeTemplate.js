import React from 'react'
import { graphql, Link } from 'gatsby'
import rehypeReact from 'rehype-react'
import Typography from '@material-ui/core/Typography'

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

const Img = (props) => {
  console.log('🏙', props)
  return <img {...props} />
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    p: P,
    li: Li,
  },
}).Compiler

const RecipeTemplate = ({ data }) => {
  const {
    markdownRemark: { htmlAst },
  } = data

  return <Layout>{renderAst(htmlAst)}</Layout>
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
      fields {
        slug
      }
    }
  }
`

export default RecipeTemplate
