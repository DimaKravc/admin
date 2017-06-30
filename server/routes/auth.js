import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import axios from 'axios';

let router = express.Router();

router.post('/', (req, res) => {
    const {email, password} = req.body;
    axios
        .get(`http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/users?search=${email}`)
        .then(innerRes => {
            let userData = innerRes.data[0];

            if (innerRes.data.length) {
                if (bcrypt.compareSync(password, userData.password)) {

                    //Create JSON Web Token
                    const token = jwt.sign({
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

export default router;