const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

router.put('/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
});

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

module.exports = router;