const Message = require('../models/Message');
const Chat = require('../models/Chat');

exports.sendMessage = async (req, res, next) => {
  try {
    const { content } = req.body;
    const chatId = req.params.id;
    const message = new Message({ sender: req.user.id, content, chat: chatId });
    await message.save();
    
    await Chat.findByIdAndUpdate(chatId, { $push: { messages: message._id } });

    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};
