const { sendMessage, getMessages } = require('../controllers/messageController');

const router2 = express.Router();

router2.post('/:chatId/messages', jwtAuthMiddleware, sendMessage);
router2.get('/:chatId/messages', jwtAuthMiddleware, getMessages);

module.exports = router2;
