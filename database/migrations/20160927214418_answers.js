exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(table) {
		table.increments('id');
    table.integer('users_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('questions_id').references('id').inTable('questions').onDelete('CASCADE');
		table.text('body');
		table.integer('likes');
		table.dateTime('created_on');
		table.dateTime('updated_on');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('answers');
};
