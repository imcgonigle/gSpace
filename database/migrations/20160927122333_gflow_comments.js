exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_comments', function(table){
    table.increments();
    table.integer('question_post_id').references('questionid').inTable('gflow_questions').notNullable().onDelete('CASCADE');
    table.string('subject');
    table.text('comment').notNullable();
    table.string('username');
    table.integer('likes');
    table.timestamps(true,true);
    table.integer('user_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_comments');
};
