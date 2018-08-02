import React from "react"
import styled from "styled-components";
import Helmet from 'react-helmet'
import Link from 'gatsby-link';

import Bio from '../components/Bio';

  /* first create a person desc with avaatar and text */
 /* and list down all the posts */
export default ({data}) => { 

    const {title :siteTitle}  = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;
    console.log(data.site);
    return (
        <div>
          <Bio/>
          <Helmet title={siteTitle} />
          {
            posts.map( ({node})=> {
                 
               return (
                <div key={node.fields.slug}> 
                  <h3> 
                    <Link to={node.fields.slug} style={{boxShadow : 'none'}}>
                    {node.frontmatter.title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{__html : node.excerpt}} /> 
                </div>
               )
            })
          }
        </div>

    );

}


export const IndexQuery = graphql`
 query IndexQuery {
     site {
         siteMetadata {
             title
         }
     }
     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY") 
              }
            }
        }
    }
     
 }
` 