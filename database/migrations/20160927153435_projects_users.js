
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_users', function(table) {
		table.integer('project_id')
		.unsigned()
		.notNullable()
		.references('id')
    .inTable('projects')
    .onDelete('CASCADE')
		table.integer('user_id')
		.unsigned()
		.notNullable()
		.references('id')
    .inTable('users')
    .onDelete('CASCADE')
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('projects_users');
};
