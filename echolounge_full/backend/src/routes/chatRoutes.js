const express = require('express');
const { createChat, getChats } = require('../controllers/chatController');
const { sendMessage } = require('../controllers/messageController');
const { jwtAuthMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', jwtAuthMiddleware, createChat);
router.get('/', jwtAuthMiddleware, getChats);
router.post('/:id/messages', jwtAuthMiddleware, sendMessage);

module.exports = router;
