var express = require('express');
var router = express.Router();
var query = require('../database/queries/projects');

var title = "Projects | "

router.get('/', function(req, res, next) {

	query.getAllProjectsWithUsers()
	.then(function(data) {

		res.render('projects/index', {user: req.user, projects: data, title: title + 'Homepage'})

	})
	.catch(function(err){

		return next(err);

	});

});

router.get('/:id/page', function(req, res, next) {

	var project_id = req.params.id;

	query.getProjectByID(project_id)
	.then(function(data) {

		var project = data[0];
		var isOwner = (req.isAuthenticated() && project.creator_id == req.user.id);

		query.getAllProjectComments(project_id)
		.then(function(data) {


			res.render('projects/page', {
				project: project,
				comments: data,
				user: req.user,
				isOwner: isOwner,
				title: title + 'Project ' + project.id
			});

		})
		.catch(function(err) {
			return next(err);
		});

	})
	.catch(function(err) {
		return next(err);
	});

});

router.post('/:id/page', function(req, res, next) {

	if(req.isAuthenticated()){

		var project_id = req.params.id;
		var user_id = req.user.id;
		var body = req.body.comment;

		query.addCommentToProject(project_id, user_id, body)
		.then(function(data) {
			res.redirect('/projects/' + data + '/page');
		})
		.catch(function(err) {
			return next(err);
		});

	} else{
		res.redirect('/login');
	}

});

router.get('/:id/edit', function(req, res, next) {

	var project_id = req.params.id;

	query.getProjectByID(project_id)
	.then(function(data) {

		var project = data[0];

		if(req.isAuthenticated() && project.creator_id== req.user.id){

			res.render('projects/edit', {
				user: req.user,
				project: project,
				title: title + 'Edit'
			});

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

		query.getProjectByID(project_id)
		.then(function(data) {

			var project = data[0];

			if (project.creator_id == req.user.id) {

				var title = req.body.title;
				var body = req.body.body;
				var repository_url = req.body.repository_url;

				query.updateProject(project.id, title, body, repository_url)
				.then(function(id) {
					res.redirect('/projects/' + id + '/page');
				})
				.catch(function(err) {
					return next(err);
				});

			} else {
				res.redirect('/projects/')
			}

		})
		.catch(function(err){
			return next(err);
		});

	}

});

router.get('/:id/delete', function(req, res, next) {
	if(req.isAuthenticated()) {

		var project_id = req.params.id;

		query.getProjectByID(project_id)
		.then(function(data) {
			var project = data[0];

			if(req.user.id == project.creator_id) {
				res.render('projects/delete', {
					project: project,
					user: req.user,
					title: title + 'Delete'
				});
			} else {
				res.redirect('/projects/');
			}

		})
		.catch(function(err) {
			return next(err);
		});

	}

});

router.post('/:id/delete', function(req, res, next) {

	if(req.isAuthenticated()) {

		var project_id = req.params.id;

		query.getProjectByID(project_id)
		.then(function(data) {

			var project = data[0];

			if(req.user.id == project.creator_id) {

				query.deleteProject(project.id)
				.then(function(data) {
					res.redirect('/projects/');
				})
				.catch(function(err) {
					return next(err);
				})

			} else{
				res.redirect('/project/' + project.id + '/page');
			}

		})
		.catch(function(err) {
			return next(err);
		});

	} else {
			res.redirect('/login');
	};

});

router.get('/new', function(req, res, next) {

	if(req.isAuthenticated()) {
		res.render('projects/new', {user: req.user, title: title + "New"})
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
			res.redirect('/projects/' + project_id + '/page');
		})
		.catch(function(err) {
			return next(err);
		});

	} else {
		res.redirect('/login');
	};

});

module.exports = router;
