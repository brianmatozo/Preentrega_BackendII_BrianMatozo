const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

// Ruta para la página de inicio
router.get('/home', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const user = req.user;
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
            </head>
            <body>
                <h1>Bienvenido, ${user.first_name} ${user.last_name}</h1>
                <img src="${user.image_url}" alt="User Image" />
            </body>
            </html>
        `);
    } catch (error) {
        res.status(500).json({ message: 'Error loading home page', error });
    }
});

module.exports = router;
