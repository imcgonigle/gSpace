exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_comments', function(table){
    table.increments();
    table.integer('users_id').references('id').inTable('users');
    table.integer('question_id').references('id').inTable('gflow_questions').notNullable();
    table.string('subject').notNullable();
    table.text('comment').notNullable();
    table.integer('likes');
    table.dateTime('created_on');
    table.dateTime('updated_on');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_comments');
};
