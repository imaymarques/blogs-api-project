const blogPostService = require('../services/blogPost.service');

const validatePostUpdate = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const checkId = await blogPostService.getPostById(id);

  if (checkId.user.id !== id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validatePostUpdate;