/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby x Contentful`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "mLZnCDvG2hiGu_-zlbWnubVIz_jaWbFmUZX513mPv8M",
    //     "spaceId": "vlq9g90h1sfs"
    //   }
    // },
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};