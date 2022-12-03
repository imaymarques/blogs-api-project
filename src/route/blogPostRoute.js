const express = require('express');

const route = express.Router();
const blogPostController = require('../controllers/blogPost.controller');
const validateToken = require('../middleware/validateToken');

route.get('/', validateToken, blogPostController.getPosts);
route.get('/:id', validateToken, blogPostController.getPostById);

module.exports = route;