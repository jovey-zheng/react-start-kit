import React, { Component } from 'react';

export default class WebpackPage extends Component {

  render() {
    const code = `
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
      `;

    return (
      <div>
        <div className="margin-bottom-md">
          webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
        </div>
        <div className="margin-bottom-md">
          Browse the contents in the left sidebar.
        </div>
        <div className="margin-bottom-md">
          If you are new to webpack, you may want to start by reading this page or the Getting started section on the left.
        </div>

        <pre>{code}</pre>
      </div>
    )
  }
}
