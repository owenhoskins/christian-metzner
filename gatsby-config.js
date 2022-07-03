require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Christian Metzner`,
    description: ``,
    author: `@owenhoskins`,
    siteUrl: `https://christian-metzner.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN, // Admin API access token
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL
      },
    },
    {
      resolve: `gatsby-source-shopify-translations`,
      options: {
        // url of your shopify store. Example: mysite.myshopify.com
        shopName: process.env.GATSBY_SHOPIFY_STORE_URL,
        // password of your shopify store (Admin API access token)
        shopifyPassword: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
        // access token of your shopify store (Storefront API access token)
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        defaultLang: `en`,
        prefixDefault: false,
        // configPath: require.resolve("./locales/config.json"),
        locales: [`en`, `gb`],
        waitingGatsbySourceShopify: 5000,
        sourceOnlyMode: true
      },
    },
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
