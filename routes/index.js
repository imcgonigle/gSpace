var express = require('express');
var router = express.Router();
var passport = require('../passport')

/* GET home page. */
router.get('/', function(req, res, next) {
console.log(req.user)
if (req.isAuthenticated()) {
    res.render('index', { user: req.user });
} else {
  res.render('index');
}
});

module.exports = router;
