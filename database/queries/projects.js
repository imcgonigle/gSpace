var knex = require('./knex.js');


function Projects() {
	return knex('projects');
};

function Projects_Users() {
	return knex('projects_users');
};

module.exports = {
	getAllProjects: Projects,
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
	}
}
