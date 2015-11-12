var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var cfenv = require('cfenv');

var config = require('./webpack.config');
var appEnv = cfenv.getAppEnv();
var port = appEnv.port;


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(appEnv.port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost: ',appEnv.port);
});
