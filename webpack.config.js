'use strict';

var path = require('path');
var webpack = require('webpack');

const APP_FILENAME = 'index';
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'example/src/' + APP_FILENAME + '.js');
const BUILD_PATH = path.resolve(ROOT_PATH, 'example/dist');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH + '/js/',
        publicPath: BUILD_PATH + '/',
        filename: APP_FILENAME + '.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, '')
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
      }),
      new webpack.optimize.UglifyJsPlugin({comments: false}),
    ]
};
