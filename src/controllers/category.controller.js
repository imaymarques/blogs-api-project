const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { status, message } = await categoriesService.getName({ name });

  if (status) {
    return res.status(status).json({ message });
  }
  return res.status(201).json(message);
};

const getCategories = async (_req, res) => {
  const user = await categoriesService.getCategories();

  return res.status(200).json(user);
};

module.exports = {
  createCategory,
  getCategories,
};