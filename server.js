const app = require('./lib/app');
require('dotenv').config();
const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;
const Mongoose = require('mongoose');

Mongoose.set('strictQuery', true);
Mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Database Connected'))
  .catch((error) => console.log(error));





app.listen(PORT, () => {
  console.log(`Server started on ${API_URL}:${PORT}`);
});
