var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var api = require('./routes/api');
var register = require('./routes/register');
var auth = require('./routes/auth');

var router = express();
var server = http.createServer(router);

router.use(bodyParser.json());

router.use('/css', express.static(path.join(__dirname, '../css')));
router.use('/css/fonts', express.static(path.join(__dirname, '../fonts')));
router.use('/js', express.static(path.join(__dirname, '../js')));

router.use('/api/register', register);
router.use('/api/auth', auth);
router.use('/api/v1', api);

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => {
    var addr = server.address();
    console.log("App server listening at", addr.address + ":" + addr.port);
});