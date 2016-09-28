exports.up = function(knex, Promise) {
  return knex.schema.createTable('meetups', function(table) {
		table.increments('id');
    table.integer('user_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('users')
		.onDelete('CASCADE')
		table.string('title');
    table.integer('likes');
		table.text('description');
		table.string('location');
    table.dateTime('time');
    table.dateTime('created_on');
    table.dateTime('updated_on');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('meetups');
};
