// var passport = require('../passport');
var express = require('express');
var router = express.Router();
var passport = require('../passport')

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


>>>>>>> 1c18433d692f930f119acf3a3095605b7bd2ba38
module.exports = router;
