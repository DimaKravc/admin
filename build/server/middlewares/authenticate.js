var jwt = require('jsonwebtoken');
var config = require('../config');
var axios = require('axios');

module.exports = (req, res, next) => {
    var authorizationHeader = req.headers['authorization'];
    var token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                res
                    .status(401)
                    .json(JSON.stringify({error: 'Failed to authenticate'}));
            } else {
                axios
                    .get(`http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/users?search=${decoded.email}`)
                    .then(innerRes => {
                        var userData = innerRes.data[0];

                        if (innerRes.data.length) {
                            next();
                        } else {
                            res
                                .status(401)
                                .json(JSON.stringify({email: 'Пользователь с таким email не найден'}));
                        }

                    }, err => {
                        res
                            .status(err.response.status)
                            .json(JSON.stringify({code: err.response.status, msg: err.response.statusText}))
                    });
            }
        })
    } else {
        res
            .status(401)
            .json(JSON.stringify({error: 'No token provided'}));
    }
}