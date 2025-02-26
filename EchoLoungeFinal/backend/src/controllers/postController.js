const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.user.id; 
  const userRole = req.user.role; 

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (userRole === "admin" || post.author.toString() === userId) {
      await Post.findByIdAndDelete(postId); 
      return res.status(200).json({ message: "Post deleted successfully" });
    } else {
      return res.status(403).json({ message: "You are not authorized to delete this post" });
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  };
  
