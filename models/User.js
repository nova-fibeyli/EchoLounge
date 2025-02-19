const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' },
  googleId: String,
});
module.exports = mongoose.model('User', UserSchema);
