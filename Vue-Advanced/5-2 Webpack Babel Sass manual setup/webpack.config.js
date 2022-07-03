// Webpack config files allow us to control how Webpack works

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    // dirname is a global constant variable, defined by Node
    // it contains the path to the current file its being used in
    path: __dirname + '/dist'
  },
  // the module property allow us to bridge the gap between Webpack and third party module (e.g. Babel),
  // however, it does not entirely control that module
  module: {
    // rules for processing with babel
    rules: [
      {
        //this rule tells babel to only process .js files
        test: /\.js%/,
        //this rule tells babel to exclude node_modules folder from  processing
        exclude: /(node_modules)/,
        // if everything passes, we're telling webpack to use babel
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // we need to tell the MiniCssExtractPlugin where to save our CSS:
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  watch: true
}