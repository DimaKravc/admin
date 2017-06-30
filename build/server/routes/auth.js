var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config');
var axios = require('axios');

var router = express.Router();

router.post('/', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    
    axios
        .get(`http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/users?search=${email}`)
        .then(innerRes => {
            var userData = innerRes.data[0];

            if (innerRes.data.length) {
                if (bcrypt.compareSync(password, userData.password)) {

                    //Create JSON Web Token
                    var token = jwt.sign({
                        email: userData.email,
                        name: userData.name,
                        lastName: userData.lastName
                    }, config.jwtSecret);

                    res.json(JSON.stringify({token}));
                } else {
                    res.status(401).json(JSON.stringify({password: 'Неверный пароль'}));
                }
            } else {
                res.status(401).json(JSON.stringify({email: 'Пользователь с таким email не найден'}));
            }

        }, err => {
            res
                .status(err.response.status)
                .json(JSON.stringify({code: err.response.status, msg: err.response.statusText}))
        });
});

module.exports = router;