// var passport = require('../passport');
var express = require('express');
var router = express.Router();
var passport = require('../passport');
var queries = require('../database/queries/users');

router.get('/', function(req, res, next) {
	if (req.isAuthenticated()) {
			queries.getUserByUsername(req.user.username)
			.then(function (data) {
				var user = data[0]
				if (user == undefined) {
					queries.createUser(req.user.id, req.user.username, req.user._json.avatar_url, req.user._json.github_url, req.user._json.email, req.user._json.bio, req.user._json.location, req.user._json.name)
					.then(function(data) {
						res.redirect('/users/new')
					})
					.catch(function(error) {
						return next(error)
					})
				} else {
					queries.updateUserLogin(req.user.username)
					.then(function (data) {
						res.render('static/home', {user: req.user});
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

router.get('/collaborate', function(req, res, next) {

	if(req.isAuthenticated()) {
		res.render('static/collaborate', {title: 'Collaborate', user: req.user})
	} else{
		res.redirect('/login')
	};

});

router.get('/random', function(req,res, next) {
	res.render('static/random', {user: req.user, title: "You shouldn't be here!!"});
});

router.get('/login', function(req, res, next) {

	if (req.isAuthenticated()) {
		res.redirect('/');
	} else{
		res.render('static/login');
	};

});

module.exports = router;
