exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags_users', function(table) {
		table.integer('tags_id')
		.unsigned()
		.notNullable()
		.references('id')
    .inTable('tags')
    .onDelete('CASCADE')
		table.integer('users_id')
		.unsigned()
		.notNullable()
		.references('id')
    .inTable('users')
    .onDelete('CASCADE')
	});
};


exports.down = function(knex, Promise) {
	return knex.schema.dropTable('tags_users');
};
