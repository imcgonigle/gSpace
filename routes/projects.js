var express = require('express');
var router = express.Router();
var query = require('../database/queries/projects');

router.get('/', function(req, res, next) {
	res.render('projects/index');
});

router.get('/:id/page', function(req, res, next) {

	var project_id = req.params.id;

	query.getProjectByID(project_id)
	.then(function(data) {

		var project = data[0];
		var isOwner = (project.user_id == req.user.id);

		res.render('projects/page', {
			project: project,
			user: req.user,
			isOwner: isOwner
		});

	})
	.catch(function(err) {
		return next(err);
	});

});

router.get('/:id/edit', function(req, res, next) {

	var project_id = req.params.id;

	query.getProjectByID(project_id)
	.then(function(data) {

		var project = data[0];

		if(project.user_id == req.user.id){
			res.render('pojects/edit', {
				user: req.user,
				project: project
			})
		} else{
			res.redirect('/projects/' + project.id + '/page');
		}

	})
	.catch(function(err) {
		return next(err);
	});

});

router.post('/:id/edit', function(req, res, next) {

	if(!req.isAuthenticated()) {
		res.redirect('/login');
	} else {

		var project_id = req.params.id;

		query.getProjectByID(post_id)
		.then(function(data) {

			var project = data[0];

			if(project.user_id == req.user.id) {

				var title = req.params.title;
				var body = req.params.body;
				var repository_url = req.params.repository_url;

				query.updateProject(project_id, title, body, repository_url)
				.then(function(id) {
					res.redirect('/projects/' + id + '/page');
				})
				.catch(function(err) {
					return next(err);
				});

			} else {
				res.redirect('/projects/' + project_id + '/page')
			}

		})
		.catch(function(err){
			return next(err);
		});

	}

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
