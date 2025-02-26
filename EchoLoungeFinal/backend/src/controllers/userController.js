const User = require('../models/User');

exports.blockUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isBlocked = true;
    await user.save();
    res.json({ message: 'User blocked successfully' });
  } catch (error) {
    next(error);
  }
};
