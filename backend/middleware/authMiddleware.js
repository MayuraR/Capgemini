// var express = require('express');
const jwt = require('jsonwebtoken');
// var cookieParser = require('cookie-parser');

//app = express();
// app.use(cookieParser())

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('http://localhost:4000/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('http://localhost:4000/login');
  }
};

module.exports = { requireAuth };