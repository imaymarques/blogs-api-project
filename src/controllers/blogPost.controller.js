const blogPostService = require('../services/blogPost.service');

const getPosts = async (_req, res) => {
  const post = await blogPostService.getPosts();
  console.log('CONSOLE CONTROLLER POST --->', post);
  return res.status(200).json(post);
};

module.exports = {
  getPosts,
};