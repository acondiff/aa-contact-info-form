const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('docs'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
          exclude: /client\/images/

      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=200000',
        exclude: /client\/fonts/
    }
    ]
  },
  plugins: [ htmlWebpackPluginConfig, new ExtractTextPlugin('styles.css') ]
}
