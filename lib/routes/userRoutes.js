const { userSignup, userSignIn, userSignOut } = require('../controllers/userController');
const Router = require('express').Router();
const authenticated = require('../middleware/authenticate');


module.exports = Router
  .post('/register', userSignup)
  .post('/login', userSignIn)
  .delete('/logout', authenticated, userSignOut);
