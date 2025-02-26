const Chat = require('../models/Chat');

exports.createChat = async (req, res, next) => {
  try {
    const { participants } = req.body;
    const chat = new Chat({ participants });
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    next(error);
  }
};

exports.getChats = async (req, res, next) => {
  try {
    const chats = await Chat.find({ participants: req.user.id }).populate('participants', 'username');
    res.json(chats);
  } catch (error) {
    next(error);
  }
};
