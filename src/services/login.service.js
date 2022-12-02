const { token } = require('../auth/token');
const { User } = require('../models');

const login = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });
  if (!result) return { type: 'INVALID', message: 'Invalid fields' };
  const getToken = token({ email });
  return { type: null, getToken };
};

module.exports = {
  login,
};