import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import data from '../database/datatable.json';
import config from '../config';

let router = express.Router();

router.post('/', (req, res) => {
    const {email, password} = req.body;

    if (data.users[email]) {
        let user = data.users[email];


        if (bcrypt.compareSync(password, user.user_password)) {

            // Create JSON Web Token
            const token = jwt.sign({
                email: user.user_email,
                name: user.user_name,
                lastName: user.user_last_name
            }, config.jwtSecret);

            // Server response delay imitation
            setTimeout(()=> {
                res.json({token});
            }, 1000)
        } else {
            res.status(401).json({password: 'Неверный пароль'});
        }
    } else {
        res.status(401).json({email: 'Пользователь с таким email не найден'});
    }

});

export default router;