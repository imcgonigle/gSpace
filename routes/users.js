var express = require('express');
var router = express.Router();
var queries = require('../database/queries/users')
var passport = require('../passport')

/* GET users listing. */
router.get('/new', function(req, res, next) {
  var user = req.user._json
  res.render('user/newUser', {user:user});
});

router.get('/profile', function(req, res, next) {
  var username = req.user.username
  queries.getUserByUsername(username)
    .then(function(user) {
      console.log(user)
      res.render('user/profile', {user:user[0]})
    })
})

router.post('/', function(req, res, next) {
  queries.getUserByUsername(req.user.username)
  .then(function (data) {
    queries.updateUserInfo(req.user.username, req.body.biography, req.body.name, req.body.location, req.body.email, req.body.github_url, req.body.linkedin_url, req.body.website, req.body.cohort)
    .then(function(data) {
      res.redirect('/')
    })
    .catch(function(error) {
      return next(error)
    })
  })
})

module.exports = router;
