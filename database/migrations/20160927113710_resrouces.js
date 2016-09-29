
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource', function(table) {
    table.increments('id');
    table.integer('users_id').references('id').inTable('users').onDelete('CASCADE');
    table.string('title');
    table.integer('likes');
    table.text('description');
    table.string('link');
    table.dateTime('updated_on');
    table.dateTime('created_on');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource');
};
