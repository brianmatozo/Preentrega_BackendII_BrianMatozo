require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');
const sessionRouter = require('./routes/session');

const app = express();

// console.log({ MONGODB_URL: process.env.MONGODB_URI });

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/sessions', sessionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
