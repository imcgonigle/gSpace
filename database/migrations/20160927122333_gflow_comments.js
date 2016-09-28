exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_comments', function(table){
    table.increments();
    table.integer('users_id').references('id').inTable('users');
    table.integer('question_id').references('id').inTable('gflow_questions').notNullable();
    table.text('comment').notNullable();
<<<<<<< HEAD
    table.string('username');
    table.timestamps(true,true);
=======
    table.integer('likes');
    table.dateTime('created_on');
    table.dateTime('updated_on');
>>>>>>> 190bed55a0533cb9791240165470bf8c300cc622
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_comments');
};
