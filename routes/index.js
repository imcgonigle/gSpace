// var passport = require('../passport');
var express = require('express');
var router = express.Router();
var passport = require('../passport')
var queries = require('../database/queries/users')

router.get('/', function(req, res, next) {
	if (req.isAuthenticated()) {
			queries.getUserByUsername(req.user.username)
			.then(function (data) {
				var user = data[0]
				if (user == undefined) {
					queries.createUser(req.user.username, req.user.avatar_url, req.user.github_url, req.user.email, req.user.bio, req.user.location, req.user.name)
					.then(function(data) {
						res.redirect('/users/new')
					})
					.catch(function(error) {
						return next(error)
					})
				} else {
					queries.updateUserLogin(req.user.username)
					.then(function (data) {
						res.render('static/home')
					})
					.catch(function(error) {
						return next(error)
					})
				}
			})
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
