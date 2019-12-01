module.exports = {
  siteMetadata: {
    title: `Aditya Rao - Personal Website`,
    author: `Aditya Rao`,
    description: `Personal website of Aditya Rao`,
    siteUrl: 'https://adityarao.in',
    social: {
      twitter: `thisisadityarao`,
    },
    siteVerification: {
      google: 'fw84RjlaJv5i2yleReiCyk605wgYyjchRWM0mfh_43c',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Aditya Rao',
        short_name: 'Aditya Rao',
        start_url: '/',
        background_color: '#0069ed',
        theme_color: '#0069ed',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: 'adityar',
        apiKey: '634325125787942',
        apiSecret: 'VMkZeFpBf562yxN_IhNoCxrvBR4',
        resourceType: 'image',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
        defaultLayouts: {
          posts: require.resolve('./src/templates/blog-post.js'),
          default: require.resolve('./src/templates/blog-post.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    /*
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs"]
      }
    },
    */
    // ESLint config
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
