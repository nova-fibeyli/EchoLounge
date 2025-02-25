const express = require('express');
const { createPost, getPosts, updatePost,deletePost } = require('../controllers/postController');
const { jwtAuthMiddleware, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();  // <-- добавляем объявление router

router.post('/', createPost);
router.get('/', getPosts);
router.put('/:id', updatePost);
router.delete('/:id', jwtAuthMiddleware, isAdmin, deletePost);

module.exports = router;
