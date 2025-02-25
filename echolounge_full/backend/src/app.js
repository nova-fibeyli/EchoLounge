const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

const errorHandler = require('./middleware/errorHandler');
const { jwtAuthMiddleware } = require('./middleware/authMiddleware');
require('./config/passportConfig');

const MONGO_URI = "mongodb+srv://aikab2005:bEhL5zxpRl2eHLGw@echolounge.lfpra.mongodb.net/?retryWrites=true&w=majority&appName=EchoLounge";
const SESSION_SECRET = "a3f5e6d9c2b7a1e4d3f6c8a9b2e1f7c4d5a8b9c2f3e7d6a1b4c5f8d9e2b3a7";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', jwtAuthMiddleware, postRoutes);
app.use('/api/users', jwtAuthMiddleware, userRoutes);
app.use('/api/chats', jwtAuthMiddleware, chatRoutes);

// Global error handler
app.use(errorHandler);

// Database connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ Database connection error:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

