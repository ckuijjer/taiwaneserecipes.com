import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { h1: 'h1' },
}).Compiler

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const {
    markdownRemark: { htmlAst },
  } = data

  return (
    <div className="blog-post-container">
      <div className="blog-post">{renderAst(htmlAst)}</div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
    }
  }
`

export default Template
