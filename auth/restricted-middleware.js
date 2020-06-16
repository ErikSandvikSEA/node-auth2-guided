const jwt = require('jsonwebtoken')
const constants = require('../config/constants')

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization
  const secret = constants.jwtSecret
  if(token){
    jwt.verify(token, secret, (error, decodedToken) => {
      if(error){
        res.status(401).json({
          message: 'Invalid Token'
        })
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({
      message: 'Please provide credentials to access this resource'
    })
  }
};
