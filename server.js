var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.development');

var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Port is '+ app.get('port') +', please wait to build ...');
});
