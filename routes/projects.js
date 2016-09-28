var express = require('express');
var router = express.Router();
var query = require('../database/queries/projects');

router.get('/', function(req, res, next) {
	res.render('projects/index');
});

router.get('/new', function(req, res, next) {

	if(req.isAuthenticated()) {
		res.render('projects/new', {user: req.user})
	} else {
		res.redirect('/login')
	};

});

router.post('/new', function(req, res, next) {

	if(req.isAuthenticated()){

		var creator_id = req.user.id;
		var title = req.body.title;
		var body = req.body.body;
		var repository_url = req.body.repository_url;

		query.addProject(creator_id, title, body, repository_url)
		.then(function(project_id) {
			res.redirect('/projects/project_id');
		})
		.catch(function(err) {
			return next(err);
		});

	} else {
		res.redirect('/login');
	}

})

module.exports = router;
