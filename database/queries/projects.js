var knex = require('./knex.js');


function Projects() {
	return knex('projects');
};

function Projects_Users() {
	return knex('projects_users');
};

function Comments() {
	return knex('comments');
};

function Users() {
	return knex('users');
};

module.exports = {
	getAllProjects: Projects,
	getAllProjectsWithUsers: function() {
		return knex('projects')
		.select('projects.id AS project_id', 'creator_id', 'projects.body', 'projects.title', 'projects.created_on', 'projects.updated_on', 'users.username')
		.join('users', 'users.id', 'projects.creator_id')
		.orderBy('created_on', 'desc');
	},
	getProjectByID: function(project_id) {
		return Projects().where('id', project_id);
	},
	addProject: function(creator_id, title, body, repository_url) {
		return Projects().insert({
			creator_id: creator_id,
			title: title,
			body: body,
			repository_url: repository_url,
			likes: 0,
			created_on: new Date(),
			updated_on: new Date()
		})
		.returning('id');
	},
	updateProject: function(project_id, title, body, repository_url) {
		return Projects().where('id', project_id).update({
			title: title,
			body: body,
			repository_url: repository_url,
			updated_on: new Date()
		})
		.returning('id');
	},
	deleteProject: function(project_id) {
		return Projects().where('id', project_id).del();
	},
	addLikeToProject: function(project_id, likes) {
		return Projects().where('id', project_id).update({
			likes: likes += 1
		});
	},
	joinProject: function(user_id, project_id){
		return Projects_Users().insert({
			user_id: user_id,
			project_id: project_id
		}).returning('project_id');
	},
	addCommentToProject: function(project_id, user_id, body) {
		return knex('comments').insert({
			type: 'project',
			uid: project_id,
			users_id: user_id,
			body: body,
			likes: 0,
			created_on: new Date(),
			updated_on: new Date()
		}).returning('uid')
	},
	getAllProjectComments: function(project_id) {
		return Comments().where({
			uid: project_id,
			type: 'project'
		})
		.orderBy('created_on', 'desc')
		.select('comments.body AS comment', 'username', 'comments.created_on AS posted_on')
		.join('users', 'users_id', 'users.id');
	},
	getUser: function(user_id){
		return Users().where('id', user_id);
	}
}
