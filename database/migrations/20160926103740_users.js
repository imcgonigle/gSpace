
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
		table.increments('id');
		table.string('username');
		table.text('biography');
		table.string('first_name');
		table.string('last_name');
		table.string('cohort');
		table.string('city');
		table.string('linkdn_url');
		table.string('github_url');
		table.string('website');
		table.string('email');
		table.dateTime('first_login');
		table.dateTime('last_login');

	})
};

exports.down = function(knex, Promise) {
	knex.schema.dropTable('users');
};
