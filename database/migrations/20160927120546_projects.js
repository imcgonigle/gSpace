
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
		table.increments('id');
		table.integer('creator_id');
	})
};

exports.down = function(knex, Promise) {

};
