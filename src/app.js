const express = require('express');
const loginRoute = require('./route/loginRoute');
const userRoute = require('./route/userRoute');
const caterogyRoute = require('./route/categoryRoute');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', caterogyRoute);

module.exports = app;
