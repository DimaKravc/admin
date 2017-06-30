var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';

var api = require('./routes/api');
var register = require('./routes/register');
var auth = require('./routes/auth');

var app = express();

app.use(bodyParser.json());

app.use('/api/register', register);
app.use('/api/auth', auth);
app.use('/api/v1', api);

var compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(3000, ()=> console.log('\x1b[33m', 'Running on localhost:3000'));