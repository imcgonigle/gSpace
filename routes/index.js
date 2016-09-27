// var passport = require('../passport');
var express = require('express');
var router = express.Router();
var passport = require('../passport')

router.get('/', function(req, res, next) {

if (req.isAuthenticated()) {
    res.render('static/home', { user: req.user });
} else {
  res.render('/login');
}
module.exports = router;
