exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_questions', function(table){
    table.increments('questionid').primary();
    table.string('username');
    table.string('title').notNullable();
    table.text('question').notNullable();
    table.integer('likes');
    table.timestamps(true,true);
    table.integer('user_id');
    table.string('tags');
    table.integer('views');
    table.integer('comments');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_questions');
};
