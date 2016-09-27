// var passport = require('../passport');
var express = require('express');
var router = express.Router();
var passport = require('../passport')

var meetupsFile = require('../database/queries/meetups.js')

router.get('/', function(req, res, next) {

	if (req.isAuthenticated()) {
	    res.render('static/home', { user: req.user });
	} else {
	  res.redirect('/login');
	};

});

router.get('/login', function(req, res, next) {

	if (req.isAuthenticated()) {
		res.redirect('/');
	} else{
		res.render('static/login');
	};

});

module.exports = router;
