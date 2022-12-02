require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const token = (user) => {
  const createToken = jwt.sign({ data: user }, secret, jwtConfig);
    return createToken;
};

const validateToken = (getToken) => {
  try {
    const result = jwt.verify(getToken, secret);
    return result;
  } catch (error) {
    console.log(error);
    return {
      isError: true,
      message: 'Expired or invalid token',
    };
  }
};

module.exports = {
  token,
  validateToken,
};