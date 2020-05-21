const remark = require('remark')
const select = require('unist-util-select')
const toString = require('mdast-util-to-string')

exports.onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type !== 'MarkdownRemark') return

  const content = await loadNodeContent(node)

  const ast = remark().parse(content)

  const title =
    node.frontmatter?.title || toString(select.select('heading[depth=1]', ast))

  const steps = select
    .selectAll('heading:has(text[value=Steps]) + list > listItem ', ast)
    .map(toString)

  const ingredients = select
    .selectAll('heading:has(text[value=Ingredients]) + list > listItem ', ast)
    .map(toString)

  const recipe = {
    title,
    steps,
    ingredients,
  }

  const child = {
    ...recipe,
    id: createNodeId(node.id), // just use the markdown id
    children: [],
    parent: node.id,
    internal: {
      contentDigest: createContentDigest(recipe),
      type: 'Recipe',
    },
  }

  actions.createNode(child)
  actions.createParentChildLink({ parent: node, child })
}
