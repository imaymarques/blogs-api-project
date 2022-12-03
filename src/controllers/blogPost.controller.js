const blogPostService = require('../services/blogPost.service');

const getPosts = async (_req, res) => {
  const post = await blogPostService.getPosts();
  return res.status(200).json(post);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postId = await blogPostService.getPostById(id);
  if (!postId) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(postId);
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await blogPostService.updatePostById(id, title, content);
  const updatePost = await blogPostService.getPostById(id);
  return res.status(200).json(updatePost);
};

module.exports = {
  getPosts,
  getPostById,
  updatePostById,
};