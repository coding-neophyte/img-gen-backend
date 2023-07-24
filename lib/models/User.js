const Mongoose = require('mongoose');


const UserSchema = new Mongoose.Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  posts: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'posts' }]
}, { timestamps: true });


module.exports = Mongoose.model('User', UserSchema);
