exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_questions', function(table){
    table.increments('questionid').primary();
    table.string('username');
    table.string('title').notNullable();
    table.text('question').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_questions');
};
