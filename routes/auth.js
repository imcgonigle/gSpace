var express = require('express');
var router = express.Router();
var passport = require('../passport')

router.get('/github', passport.authenticate("github"))

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('../');
  }
);

router.get('/logout', function(req,res,next) {
  req.logout();
  res.redirect('/')
})

module.exports = router;
