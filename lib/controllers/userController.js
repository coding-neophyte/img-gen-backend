const UserService = require('../services/UserService');

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

const userSignIn = async (req, res) => {
  try{
    const { email, password } = req.body;

    const token = await UserService.signIn({ email, password });
    res.cookie(process.env.COOKIE_NAME, token, cookieObject)
      .status(200)
      .json({ message: 'Signed In' });


  }catch(e){
    e.status = 401;
    res.json({ message: e.message });
  }
};

const userSignOut = async (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME, cookieObject)
    .status(204)
    .json({ message: 'Signed Out' });
};

module.exports = { userSignup, userSignIn, userSignOut };
