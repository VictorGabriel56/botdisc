const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    
    try {

        const {discord} = req.body;
        console.log(discord)
        if( await User.findOne({ discord })) {
            return res.status(400).send({ error: "Usuario ja existe" });
        }

        const user = await User.create(req.body);
        return res.send({ user });

    } catch (err) {

        return res.status(500).send({ error: "fail register" });

    }
});

module.exports = app => app.use('/auth', router)