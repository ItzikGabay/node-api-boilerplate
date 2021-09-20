const jwt = require('jsonwebtoken');

function verifyAuth(req, res, next) {
   const token = req.header('auth-token');
   if (!token) {
      return res.status(401).send({ message: 'Access denied. Please login first.', status: '0' });
   }
   try {
      const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verifiedToken;
      next();
   } catch (e) {
      res.status(400).send('Error! invalid token.');
   }
}

module.exports = verifyAuth;