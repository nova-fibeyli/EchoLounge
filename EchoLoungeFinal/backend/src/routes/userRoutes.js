const express = require('express');
const { blockUser } = require('../controllers/userController');
const { jwtAuthMiddleware, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/:id/block', jwtAuthMiddleware, isAdmin, blockUser);

module.exports = router;
