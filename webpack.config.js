const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //Webpack JS Setup
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  //Webpack server setup

  //Mapping for code Errors
  devtool: 'eval-source-map',

  devServer: {
    //Directory of where to find files to display
    contentBase: './dist'
  },

  module: {
    rules: [
      //Setup for SCSS Loaders
      {
        //Regex test for scss files
        test: /\.scss$/,
        //Select loaders for file types matching test
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      //Places js script tags after the body tag
      inject: 'body',
      //HTML file to be included in distribution
      template: './src/index.html',
      //Output file name when added to Dist Folder
      filename: 'index.html'
    })

  ]


};
