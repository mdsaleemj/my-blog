const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = function({node,boundActionCreators,getNode}){
  const {createNodeField} = boundActionCreators;
  if(node.internal.type == `MarkdownRemark`){
      const value = createFilePath({node,getNode});
      createNodeField({
          name : `slug`,
          node,
          value
      })
  }

}

exports.createPages = function({graphql,boundActionCreators}){
		const { createPage } = boundActionCreators;
		const blogPost = path.resolve('./src/templates/blog-post.js')
    return new Promise( (resolve,reject) => {
        resolve(
            graphql(
                `
                {
                    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                        edges {
                            node {
                              fields {
                                slug
                              }
                              frontmatter {
                                title
                              }
                            }
                          }
                    }
                }
                `
            ).then( result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                      // Create blog posts pages.
                 const postAll = result.data.allMarkdownRemark.edges;
                 postAll.forEach(function(post,index){
										const next  = index === postAll.length - 1 ? null : postAll[index + 1].node;
										const prev  = index === 0 ? null : postAll[index -1].node ;
										
										createPage({
											path : post.node.fields.slug,
											component : blogPost,
											context : {
												slug : post.node.fields.slug,
												prev,
												next
											}
										})
                 })

            })
            
            
        )
    })

}