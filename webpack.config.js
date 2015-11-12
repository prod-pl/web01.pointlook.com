var path = require('path');
var webpack = require('webpack');
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var port = appEnv.port;

module.exports = {
  devtool: 'eval',
  port: appEnv.port,
  entry: [
    'webpack-dev-server/client?http://localhost:appEnv.port',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
