import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Bio from '../components/Bio';
import {rhythm,scale} from '../utils/typography';


export default ({data,pathContext}) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const {prev,next} = pathContext;
    return (
        <div>
            <Helmet title={`${post.frontmatter.title}` || siteTitle} />
            <h1> {post.frontmatter.title}</h1>
            <p style={{ 
                ...scale(-1/5),
                marginTop: rhythm(-1),
                marginBottom : rhythm(1),
                display : 'block'
            }}>{post.frontmatter.date} </p>
            <div dangerouslySetInnerHTML={{__html:post.html}} />
        <Bio/>
        <ul style={{
            display : 'flex',
            flewWrap : 'wrap',
            justifyContent :'space-between',
            listStyle : 'none',
            padding : 0
         }}>           

             <li>
            { prev &&  <Link to={prev.fields.slug} rel="prev">
                       ← {prev.frontmatter.title}</Link>
            }</li>

            <li>
             {
              next && <Link to={next.fields.slug} rel="next">
                           {next.frontmatter.title} → </Link> 
            }</li>
        </ul>
        </div>
      

    );
}



export const pageQuery = graphql`
 query BlogPostQuery($slug: String!) {
    site {
        siteMetadata {
            title
            author
        }
    }
    markdownRemark(fields : { slug :{ eq : $slug} } ){
        id
        html
        frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
        }
    }
 }
`;