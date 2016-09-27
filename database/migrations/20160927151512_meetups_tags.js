exports.up = function(knex, Promise) {
  return knex.schema.createTable('meetups_tags', function(table) {
      table.integer('meetup_id')
      .unsigned()
      .notNullable()
      .references('id')
 .inTable('meetups')
 .onDelete('CASCADE')
      table.integer('tag_id')
      .unsigned()
      .notNullable()
      .references('id')
 .inTable('tags')
 .onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetups_tags');
};
