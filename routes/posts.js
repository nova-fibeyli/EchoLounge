const express = require('express');
const Post = require('../models/Post');
const { jwtAuthMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', jwtAuthMiddleware, async (req, res) => {
  const post = await Post.create({ ...req.body, author: req.user.id });
  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author');
  res.json(post);
});

router.put('/:id', jwtAuthMiddleware, async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

router.delete('/:id', jwtAuthMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });

  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

module.exports = router;
