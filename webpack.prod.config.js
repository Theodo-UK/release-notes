const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.jsx'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
}
