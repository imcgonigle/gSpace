exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_questions', function(table){
    table.increments('id').primary();
    table.integer('users_id').references('id').inTable('users');
    table.text('question').notNullable();
    table.integer('likes');
    table.dateTime('created_on');
    table.dateTime('updated_on');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_questions');
};
