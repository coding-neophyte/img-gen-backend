const Mongoose = require('mongoose');
require('dotenv').config();


beforeAll(async() => {
  await Mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});


afterAll(async() => {
  await Mongoose.disconnect();
});
