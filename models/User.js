const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' },
  googleId: String,
  isBlocked: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
