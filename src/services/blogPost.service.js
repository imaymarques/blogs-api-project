const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const postId = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return postId;
};

const updatePostById = async (id, title, content) => {
  const [data] = await BlogPost.update({ title, content }, { where: { id } });
  return data;
};

module.exports = {
  getPosts,
  getPostById,
  updatePostById,
};