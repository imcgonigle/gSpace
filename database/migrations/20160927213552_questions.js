exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(table) {
		table.increments('id');
		table.string('username');
		table.integer('users_id')
		.references('id')
		.inTable('users').onDelete('CASCADE');
		table.string('title');
		table.text('body');
		table.integer('likes');
		table.dateTime('created_on');
		table.dateTime('updated_on');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('questions');
};
