const { User } = require('../models');
const { token } = require('../auth/token');

const users = async ({ displayName, email, password, image }) => {
  const user = User.create({ displayName, email, password, image });
  return user;
};

const getLoginUsers = async ({ displayName, email, password, image }) => {
  const user = await User.findAll({ where: { email } });

  if (user.length) { 
    return { status: 409, message: 'User already registered' }; 
  }
  const create = await users({ displayName, email, password, image });

  const createToken = token(create);

  return { status: null, message: createToken };
};

const getUsers = async () => {
  const getUser = await User.findAll({ attributes: { exclude: ['password'] } });
  return getUser;
};

const getById = async (id) => {
  const userId = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!userId) return { status: 404, message: 'User does not exist' };
  return { status: 200, userId };
};

module.exports = {
  getLoginUsers,
  getUsers,
  getById,
};