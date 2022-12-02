require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const token = (user) => {
  const createToken = jwt.sign({ data: user }, secret, jwtConfig);
  console.log('Vendo o que retorna', createToken);
    return createToken;
};

module.exports = {
  token,
};