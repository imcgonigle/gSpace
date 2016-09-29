exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
		table.increments('id');
    // ex projects
    table.string('type');
    // id of the project/meetup/article
    table.integer('uid');
    table.integer('users_id').references('id').inTable('users').onDelete('CASCADE');
		table.text('body');
    table.integer('likes');
    table.dateTime('created_on');
    table.dateTime('updated_on');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('comments');
};
