const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const baseConfig = require('./webpack.prod.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ].concat(baseConfig.entry),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader', 'babel-loader'
        ]
      },
      {
        test: /\.styl?$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader', 'stylus-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ]
});
