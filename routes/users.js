var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  var user = req.user._json
  res.render('newUser', {user:user});
});

router.post('/', function(req, res, next) {
  knex('users').update({
    name: req.body.name,
    email: req.body.email,
    cohort: req.body.cohort,
    location: req.body.location,
    biography: req.body.bio,
    website: req.body.website,
    github_url: req.body.github,
    linkedin_url: req.body.linkedin
  }).where('username', req.user.username)
})

module.exports = router;
