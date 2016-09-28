var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
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



module.exports = router;
