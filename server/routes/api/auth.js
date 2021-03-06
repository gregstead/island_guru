const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

router.use(passport.authenticate('local'));

// Matches with '/api/auth/login'
router.route('/login').post(authController.login);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
