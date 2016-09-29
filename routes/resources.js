var express = require('express');
var router = express.Router();
var queries = require('../database/queries/resources')
var passport = require('../passport')

router.get('/', function(req, res, next) {
	console.log(req.user)
	queries.getAllResources()
		.then(function(resource) {
			res.render('resources/index', {
				title: 'Resources Homepage',
				resource: resource,
				user: req.user
			})
		})
	.catch(function(error) {
		return next(error)
	})
});

router.post('/new', function(req, res, next) {
	queries.addResource(req.user.id, req.body.title, req.body.description, req.body.link)
		.then(function (data) {
			res.redirect('/')
		})
		.catch(function(error) {
			return next(error)
		})
})

router.post('/new/like')



module.exports = router;
