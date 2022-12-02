const express = require('express');

const route = express.Router();
const categorieController = require('../controllers/category.controller');
const validateToken = require('../middleware/validateToken');
const validateName = require('../middleware/validateCategory');

route.post('/', validateToken, validateName, categorieController.createCategory);

module.exports = route;