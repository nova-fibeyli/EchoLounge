const express = require('express');
const Chat = require('../models/Chat');
const Message = require('../models/Message');
const { jwtAuthMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', jwtAuthMiddleware, async (req, res) => {
  const chat = await Chat.create({ participants: req.body.participants });
  res.json(chat);
});

router.get('/', jwtAuthMiddleware, async (req, res) => {
  const chats = await Chat.find({ participants: req.user.id }).populate('participants');
  res.json(chats);
});

router.get('/:id', jwtAuthMiddleware, async (req, res) => {
  const chat = await Chat.findById(req.params.id).populate('participants');
  res.json(chat);
});

router.post('/:id/messages', jwtAuthMiddleware, async (req, res) => {
  const message = await Message.create({ chat: req.params.id, sender: req.user.id, content: req.body.content });
  await Chat.findByIdAndUpdate(req.params.id, { $push: { messages: message._id } });
  res.json(message);
});

router.get('/:id/messages', jwtAuthMiddleware, async (req, res) => {
  const messages = await Message.find({ chat: req.params.id }).populate('sender');
  res.json(messages);
});

module.exports = router;
