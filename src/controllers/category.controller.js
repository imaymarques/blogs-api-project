const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { status, message } = await categoriesService.getName({ name });

  if (status) {
    return res.status(status).json({ message });
  }
  return res.status(201).json(message);
};

module.exports = {
  createCategory,
};