const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message, getToken } = await loginService.login(email, password);
  if (type === 'INVALID') return res.status(400).json({ message });
  return res.status(200).json({ token: getToken });
};

module.exports = {
  login,
};