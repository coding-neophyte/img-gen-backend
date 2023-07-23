const Mongoose = require('mongoose');


const ProductSchema = new Mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }

}, { timestamps: true });

module.exports = Mongoose.model('Product', ProductSchema);
