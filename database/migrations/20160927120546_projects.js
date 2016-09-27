
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
		table.increments('id');
		table.integer('creator_id');
		table.string('title');
		table.body('text');
		table.string('repository_url');
		table.integer('likes');
		table.dateTime('created_on');
		table.dateTime('updated_on');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('projects');
};
