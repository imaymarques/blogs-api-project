const jwt = require('../auth/token');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validateToken = (req, res, next) => {
    const { authorization: token } = req.headers;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    const payload = jwt.validateToken(token, secret);
    if (payload.isError) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next();
};

module.exports = validateToken;