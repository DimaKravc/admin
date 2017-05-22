import express from 'express';
import path from 'path';
import fs from 'fs';
import users from '../database/users.json';

let router = express.Router();

const saveUser = (data, callback) => {
    fs.writeFile(path.join(__dirname, '../database/users.json'), JSON.stringify(data), callback)
};

router.post('/', (req, res) => {
    let user = req.body.email;

    if (user && !users[user]) {
        users[user] = req.body;
        saveUser(users, (err)=> {
            if (err) {
                res.status(404).send('User not saved');
                return;
            }

            res.send('User saved');
        });
    } else {
        res.status(404).send('User with this email already exists');
    }
});


export default router;