const express = require('express');
const userController = require('../controllers/user.controller');
const { validateDisplayName,
  validateEmail, 
  validadePassword } = require('../middleware/validateUser');

const router = express.Router();

router.post('/', validateDisplayName, validadePassword, validateEmail, userController.users);

module.exports = router;