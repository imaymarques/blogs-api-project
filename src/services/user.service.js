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

module.exports = {
  getLoginUsers,
};