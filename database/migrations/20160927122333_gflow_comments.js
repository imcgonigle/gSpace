exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_comments', function(table){
    table.increments();
    table.integer('question_post_id').references('questionid').inTable('gflow_questions').notNullable();
    table.string('subject').notNullable();
    table.text('comment').notNullable();
    table.string('username');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_comments');
};
