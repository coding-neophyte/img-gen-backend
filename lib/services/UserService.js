const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = class UserService{
  static async signUp({ name, username, email, password }){
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    if(existingEmail) throw new Error('Email Already Exists');
    if(existingUsername) throw new Error('Username Taken');

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword
    });
    await newUser.save();
    return newUser;
  }
  static async signIn({ email, password = '' }){
    try{
      const existingUser = await User.findOne({ email });
      if(!existingUser) throw new Error('Invalid Email');

      if(!bcrypt.compareSync(password, existingUser.password)) throw new Error('Password Invalid');

      const token = jwt.sign({ ...existingUser }, process.env.JWT_SECRET, {
        expiresIn: '24h'
      });

      return token; 

    }catch(e){
      e.status = 401;
      throw(e);
    }
  }
};
