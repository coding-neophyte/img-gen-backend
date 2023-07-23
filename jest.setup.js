const Mongoose = require('mongoose');

beforeAll(async() => {
  await Mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});


afterAll(async() => {
  await Mongoose.disconnect();
});
