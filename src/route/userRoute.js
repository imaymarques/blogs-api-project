const express = require('express');
const userController = require('../controllers/user.controller');
const { validateDisplayName,
  validateEmail, 
  validadePassword } = require('../middleware/validateUser');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validadePassword, validateEmail, userController.users);
router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.getById);

module.exports = router;