var express = require('express');
var path = require('path');
var fs = require('fs');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var data = require('../database/datatable.json');
var config = require('../config');

let router = express.Router();

let saveUser = (file, callback) => {
    fs.writeFile(path.join(__dirname, '../database/datatable.json'), JSON.stringify(file), callback)
};

router.get('/:identifier', (req, res) => {
    setTimeout(()=> {
        res.send(data.users[req.params.identifier])
    }, 1000)
});

router.post('/', (req, res) => {
    if (!data.users[req.body.email]) {
        data.users[req.body.email] = {
            user_name: req.body.username,
            user_last_name: req.body.userLastName,
            user_email: req.body.email,
            user_password: bcrypt.hashSync(req.body.password, 10),
            user_role: "admin"
        };

        saveUser(data, (err)=> {
            if (err) {
                res.status(404).send('User not saved');
                return;
            }
            setTimeout(()=> {
                const token = jwt.sign({
                    email: req.body.email,
                    name: req.body.username,
                    lastName: req.body.userLastName
                }, config.jwtSecret);

                res.json({token});
            }, 1000)
        });
    } else {
        res.status(404).send('User with this email already exists');
    }
});

module.exports = router;