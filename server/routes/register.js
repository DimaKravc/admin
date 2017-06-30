var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config');
var axios = require('axios');

var router = express.Router();

router.get('/:identifier', (req, res) => {
    var user = req.params.identifier;
    axios
        .get(`http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/users?search=${user}`)
        .then(innerRes => {
            if (innerRes.data.length) {
                res.json(JSON.stringify({email: user}))
            } else {
                res.json(JSON.stringify({email: false}))
            }
        }, err => {
            res
                .status(err.response.status)
                .json(JSON.stringify({code: err.response.status, msg: err.response.statusText}))
        });
});

router.post('/', (req, res) => {
    axios
        .post('http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/users', {
        name: req.body.username,
        lastName: req.body.userLastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(innerRes => {
            var token = jwt.sign({
                email: req.body.email,
                name: req.body.username,
                lastName: req.body.lastName
            }, config.jwtSecret);

            res.json(JSON.stringify({token}));
        }, err => {
            res
                .status(err.response.status)
                .json(JSON.stringify({code: err.response.status, msg: err.response.statusText}))
        })
});

module.exports = router;