const userService = require('../services/user.service');

const users = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message } = await
    userService.getLoginUsers({ displayName, email, password, image });
  if (status) return res.status(status).json({ message });
  return res.status(201).json({ token: message });
};

const getUsers = async (_req, res) => {
  const user = await userService.getUsers();
  return res.status(200).json(user);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message, userId } = await userService.getById(Number(id));
  if (message) return res.status(status).json({ message });
  return res.status(status).json(userId);
};

module.exports = {
  users,
  getUsers,
  getById,
};