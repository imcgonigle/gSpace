var express = require('express');
var router = express.Router();
var queries = require('../database/queries/resources')
var passport = require('../passport')

router.get('/', function(req, res, next) {
	console.log(req.user)
	queries.getAllResources()
		.then(function(resource) {
			console.log(resource)
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

router.post('/new/like/:id', function(req, res ,next) {

	var resource_id = req.params.id
	queries.getResourceById(resource_id)
	.then(function(data) {
		var likes = data[0].likes
		var id =data[0].id
		queries.addLikeToResource(id,likes)
			.then(function(data) {
				console.log(data)
				res.send(data)
			})
	})
	// .catch(function(error) {
	// 	return next(error)
	// })
})



module.exports = router;
