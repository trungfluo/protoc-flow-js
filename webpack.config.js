const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  entry: './src/index',

  output: {
    path: __dirname + '/lib',
    publicPath: '',
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  devtool: 'source-map',

  plugins: [new FlowBabelWebpackPlugin({ warn: true })],
};
