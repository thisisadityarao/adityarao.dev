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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: '@wapps/gatsby-plugin-fonts',
      options: {
        googleFonts: {
          families: [
            'Fira Sans:300,300i,400,400i,700,700i,900,900i',
            'Nunito Sans:300,300i,400,400i,700,700i,900,900i',
          ],
          subsets: ['latin'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        pure: true,
      },
    },
  ],
};
