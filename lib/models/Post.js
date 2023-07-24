const Mongoose = require('mongoose');


const PostSchema = new Mongoose.Schema({
  name: { type: String, required: true, trim: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true }

}, { timestamps: true });


module.exports = Mongoose.model('Post', PostSchema);
