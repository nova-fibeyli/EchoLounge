const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const ADMIN_EMAILS = ['admin@example.com', 'admin2@example.com'];
JWT_SECRET = 'a3f5e6d9c2b7a1e4d3f6c8a9b2e1f7c4d5a8b9c2f3e7d6a1b4c5f8d9e2b3a7'
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const role = ADMIN_EMAILS.includes(email) ? 'admin' : 'user';
    const user = await User.create({ username, email, password: hashedPassword, role });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
