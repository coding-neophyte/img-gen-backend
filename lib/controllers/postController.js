const Post = require('../models/Post');


const addPost = async(req, res) => {
  try{
    const { prompt, photo } = req.body;
    const newPost = new Post({
      name: req.user.name,
      prompt,
      photo,
      authorId: req.user._doc._id
    });
    res.status(200).json(newPost);
  }catch(e){
    e.status = 500;
    res.json({ message: e.message });
  }
};





module.exports = { addPost };
