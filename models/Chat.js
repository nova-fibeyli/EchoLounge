const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ sender: String, text: String, timestamp: Date }],
  });
  module.exports = mongoose.model('Chat', ChatSchema);