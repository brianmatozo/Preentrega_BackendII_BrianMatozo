const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');

const router = express.Router();


router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        const newUser = new User({ first_name, last_name, email, password });
        await newUser.save();
        res.json({ message: 'Usuario creado con exito' });
    } else {
        return res.status(401).json({ message: 'Usuario ya existente' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true });
    res.json({ token });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(req.user);
});

module.exports = router;
