const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const location = path.resolve(`./src/templates/location.js`)
  const pageResult = await graphql(
    `
    {
      allContentfulLocation {
        edges {
          node {
            id
            entityId
            name
            description {
              description
            }
            customField1 {
              customField1
            }
            customField2 {
              customField2
            }
            customField3 {
              customField3
            }
            customField4 {
              customField4
            }
            customField5 {
              customField5
            }
            photo
          }
        }
      }
    }
    `
  )
  
  if (pageResult.errors) {
    throw pageResult.errors
  }

  // Create Product pages
  const locationTemplate = path.resolve(`./src/templates/location.js`)

  // We want to create a detailed page for each
  // product node. We'll just use the Contentful id for the slug.
  await Promise.all(
    pageResult.data.allContentfulLocation.edges.map(edge =>
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: `/locations/${edge.node.entityId}`,
        component: locationTemplate,
        context: {
          id: edge.node.id,
        },
      })
    )
  )
}