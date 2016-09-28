var express = require('express');
var router = express.Router();
var queries = require('../database/queries/resources')
var passport = require('../passport')

router.get('/index', function(req, res, next) {
	queries.getAllResources()
		.then(function(resource) {
			res.render('resources/index', {
				title: 'Resources Homepage',
				resource: resource
			})
		})
	.catch(function(error) {
		return next(error)
	})
});

router.post('/', function())



module.exports = router;
