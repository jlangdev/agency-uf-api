const express = require('express');
const router = express.Router();
const User = require('./schema.js');
const bcrypt = require('bcrypt');
BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;


router.post('/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
        .then(hash => {
            let user = new User({
                username: username,
                password: hash,
                email: email
            });
            user.save((err) => {
                if (err) {
                    res.status(500).json({
                        err: err
                    });
                }
                res.status(200).json({
                    msg: username + " successfully registered."
                });
            });
        })
});


router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.find(username)
        .then(user => {
            return bcrypt.compare(password, user.password);
        })
        .then(passwordMatch => {
            if (!passwordMatch) {
                res.status(403).send();
            }
            res.send();
        })
        .catch(err => {
            console.log("Error authenticating user: ");
            console.log(error);
        })
});

module.exports = router
