const { userSignup, userSignIn } = require('../controllers/userController');
const Router = require('express').Router();


module.exports = Router
  .post('/register', userSignup)
  .post('/login', userSignIn);
