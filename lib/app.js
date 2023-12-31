const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//app routes



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


module.exports = app;
