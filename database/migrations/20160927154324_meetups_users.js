
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meetups_users', 	function(table) {
    table.integer('users_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.integer('meetup_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('meetups')
    .onDelete('CASCADE');
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetups_users');
};
