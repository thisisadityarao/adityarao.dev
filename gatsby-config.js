module.exports = {
  siteMetadata: {
    title: "Aditya Rao",
    siteUrl: "https://adityarao.in"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Aditya Rao",
        short_name: "Aditya Rao",
        start_url: "/",
        background_color: "#5e80de",
        theme_color: "#5e80de",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`
      }
    },
    {
      resolve: "gatsby-source-cloudinary",
      options: {
        cloudName: "adityar",
        apiKey: "634325125787942",
        apiSecret: "VMkZeFpBf562yxN_IhNoCxrvBR4",
        resourceType: "image"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "./static/posts"
            }
          }
        ],
        defaultLayouts: {
          posts: require.resolve("./src/templates/blog-post.js"),
          default: require.resolve("./src/templates/blog-post.js")
        }
      }
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
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        pure: true
      }
    },
    `gatsby-plugin-netlify`,
    "gatsby-plugin-sitemap"
  ]
};
