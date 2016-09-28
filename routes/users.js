var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  var user = req.user._json
  res.render('newUser', {user:user});
});

router.post('/', function(req, res, next) {
  queries.getUserByUsername(req.user.username)
  .then(function (data) {
    var user = data[0]
    queries.updateUserInfo(req.user.username, req.user.bio, req.user.name, req.user.location, req.user.email, req.user.github, req.user.linkedin, req.user.website, req.user.cohort)
    .then(function(data) {
      res.redirect('static/home')
    })
    .catch(function(error) {
      return next(error)
    })
  })
})

module.exports = router;
