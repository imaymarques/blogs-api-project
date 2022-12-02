const express = require('express');
const loginRoute = require('./route/loginRoute');
const userRoute = require('./route/userRoute');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);

module.exports = app;
