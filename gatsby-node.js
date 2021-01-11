const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Recipe`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const RecipeTemplate = path.resolve(`src/templates/RecipeTemplate.tsx`)

  const result = await graphql(`
    {
      allRecipe(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            draft
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allRecipe.edges.forEach(({ node }) => {
    if (!node.draft) {
      createPage({
        path: node.fields.slug,
        component: RecipeTemplate,
        context: {}, // additional data can be passed via context
      })
    }
  })
}
