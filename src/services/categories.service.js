const { Category } = require('../models');

const createName = async ({ name }) => {
  const categoryName = Category.create({ name });
  return categoryName;
};

const getName = async ({ name }) => {
  const create = await createName({ name });

  return { status: null, message: create };
};

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  getName,
  getCategories,
};