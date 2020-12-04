const jwt = require('jsonwebtoken');
let r = '';

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('http://localhost:4000/login');
      } else {
        console.log(decodedToken.role);
        r = decodedToken.role
        next();
      }
    });
  } else {
    res.redirect('http://localhost:4000/login');
  }
};

const role = () => {
  return r;
}

module.exports = { requireAuth, role };