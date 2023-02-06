const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=> {
  const bearerToken = req.headers.authorization;
  if(bearerToken){
    const token = bearerToken.split('Bearer ')[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET, 'HS512');
      next();
    } catch (error) {
      res.status(401).json({ message: 'no token'});
    }
  }else{
    res.status(498).json({message: 'No token provided'});
  }
}

module.exports = authenticate;
