const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./secret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'token not provided' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: 'invalid token' });
    }

    console.log(decoded);
    req.decodedJwt = decoded;
    next();
  });
};