var jwt = require('jsonwebtoken');
var data = require('../database/datatable.json');
var config = require('../config');

var authenticate = function(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, config.jwtSecret, function(err, decoded) {
            if (err) {
                res.status(401).json({error: 'Failed to authenticate'});
            } else {
                let user = data.users[decoded.email];

                if (user) {
                    req.currentUser = user;
                    next();
                } else {
                    res.status(404).json({error: 'No such user'});
                }
            }
        })
    } else {
        res.status(403).json({
            error: 'No token provided'
        });
    }
};

module.exports = authenticate;