const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');

const cookieObject = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24,
  secure: process.env.SECURE_COOKIES === true,
  sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict'
};

const userSignup = async (req, res, next) => {
  try{
    const { name, username, email, password } = req.body;
    const newUser = await UserService.signUp({ name, username, email, password });

    const token = await UserService.signIn({ email, password });
    res.cookie(process.env.COOKIE_NAME, token, cookieObject)
      .status(200)
      .json(newUser);

  }catch(e){
    e.status = 500;
    next(e);
  }
};

module.exports = { userSignup };
