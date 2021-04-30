/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A website on the internet`,
    author: "David Cibin",
    description: `This is my site, it's cool`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans', 'Raleway']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gnotes`,
        path: `${__dirname}/src/data/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
