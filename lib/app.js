const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//app routes

app.use('/auth', userRoutes);
app.use('/posts', postRoutes);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


module.exports = app;
