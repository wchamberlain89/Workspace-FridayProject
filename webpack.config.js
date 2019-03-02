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
      //Setup of SCSS Loaders for Webpack
      {
        //Regex test for scss files
        test: /\.scss$/,
        //Select loaders for file types matching test
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      //Setup of Image loaders for Webpack
      {
        //Regex test for file extensions
        test: /\.(gif|png|jpe?g)$/,
        //Matching file extensions use file loader
        use: [
          {
            loader: 'file-loader',
            options: {
              //Sets name of output file
              name: '[name].[ext]',
              //Sets path of output file in Dist Directory
              outputPath: 'assets/imgs/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        loader: 'html-srcsets-loader',
        options: {
          attrs: ['img:src', ':srcset']
        }
      },
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
