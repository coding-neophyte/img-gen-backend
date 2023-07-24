const { addPost, getAllPost } = require('../controllers/postController');
const authenticate = require('../middleware/authenticate');
const Router = require('express').Router();


module.exports = Router
  .post('/add', authenticate, addPost)
  .get('/', getAllPost);
