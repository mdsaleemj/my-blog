import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'
import {rhythm,scale} from '../utils/typography';

console.log("LAYOUT..............");
console.log(rhythm(24), scale(-1/5));

export default ({children,data}) => {
   console.log(data);
    return  (
        <div style={{ maxWidth: rhythm(24), margin: '0 auto' , padding : `${rhythm(1.5)} ${rhythm(3/4)}`}}>       
           <h1 style ={{
								...scale(1.5),
								marginBottom : rhythm(1.5),
								marginTop : 0  
								}}>
									<Link style = {{
											color : 'inherit',
											textDecoration : `none`,
											boxShadow :`none`
									}} to="/"> {data.site.siteMetadata.title}</Link>
					</h1>
           {children()}
        </div>

    );
}

export const query = graphql`
query LayoutQuery {
    site {
        siteMetadata {
        title
        }
    }
}
`;