const express = require('express');

const route = express.Router();
const blogPostController = require('../controllers/blogPost.controller');
const validateToken = require('../middleware/validateToken');
const validatePostUpdate = require('../middleware/validatePostUpdate');

route.get('/', validateToken, blogPostController.getPosts);
route.get('/:id', validateToken, blogPostController.getPostById);
route.put('/:id', validateToken, validatePostUpdate, blogPostController.updatePostById);

module.exports = route;