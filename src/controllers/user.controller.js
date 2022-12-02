const userService = require('../services/user.service');

const users = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message } = await
    userService.getLoginUsers({ displayName, email, password, image });
  if (status) return res.status(status).json({ message });
  return res.status(201).json({ token: message });
};

module.exports = {
  users,
};