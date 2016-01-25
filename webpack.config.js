var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [__dirname + '/src/index'],
  },
  output: {
    path: __dirname + '/_dist',
    filename: '[name]_[hash].js',
  },
  resolve: {
    root: [
      __dirname + '/src',
      __dirname + '/node_modules',
      __dirname,
    ],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: /components/,
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file',
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)/,
      loader: 'file',
    }, {
      test: /\.(pdf)/,
      loader: 'file',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      favicon: __dirname + '/src/favicon.ico',
      inject: false,
    }),
  ],
};
