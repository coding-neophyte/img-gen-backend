const { userSignup } = require('../controllers/userController');
const Router = require('express').Router();


module.exports = Router.post('/register', userSignup);
