const express = require('express');
const passport = require('passport');
const { register, login } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register',validateRegister, register);
router.post('/login',validateLogin, login);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
