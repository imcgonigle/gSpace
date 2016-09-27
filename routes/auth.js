var express = require('express');
var router = express.Router();
var passport = require('../passport')


router.get('/github', passport.authenticate("github"))


router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/error' }),
  function(req, res, next) {
    res.redirect('/');
  }
);

router.get('/github/logout', function(req,res,next) {
  var name = req.username;
  console.log("LOGGIN OUT " + name)
  req.logout();
  res.redirect('/')
})

module.exports = router;
