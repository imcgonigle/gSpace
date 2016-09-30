
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {

		table.integer('id')
		.unique()
		.primary();
		table.string('username');
		table.boolean('is_admin');
		table.string('avatar_url');
		table.text('biography');
		table.string('name');
		table.integer('cohort');
		table.string('location');
		table.string('linkedin_url');
		table.string('github_url');
		table.string('website');
		table.string('email');
		table.dateTime('first_login');
		table.dateTime('last_login');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
