module.exports = {
    siteMetadata : {
     title : "Happy Dev",
     author : "Saleem",
     siteUrl: 'https://mdsaleemj.github.io/blog/',
     description : "Blog to pen down my thoughts about development etc.."
    },
    pathPrefix : '/blog',
    plugins : [
        {
            resolve : `gatsby-source-filesystem`,
            options : {
                path : `${__dirname}/src/pages`,
                name : 'pages'
            }
        },
        {
            resolve : `gatsby-transformer-remark`,
            options : {
                pulgins : [
                    {
                        resolve : `gatsby-remark-images`,
                        options :{
                            maxWidth : 600
                        }
                    },
                    {
                        resolve : `gatsby-remark-responsive-iframe`,
                        options : {
                            wrapperStyle : `margin-bottom : 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-feed`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve : `gatsby-plugin-typography`,
            options : {
                pathToConfigModule : `src/utils/typography`
            }
        }
    ]
}