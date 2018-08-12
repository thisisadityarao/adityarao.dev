const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // ESLint config
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            flexbox: true,
            supports: true,
            remove: true,
          }),
        ],
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Source+Sans+Pro:400,400i,600,600i,700,700i', 'Asap:500,500i,600,600i'],
      },
    },
  ],
};
