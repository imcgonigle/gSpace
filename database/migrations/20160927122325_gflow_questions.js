exports.up = function(knex, Promise) {
  return knex.schema.createTable('gflow_questions', function(table){
<<<<<<< HEAD
    table.increments('questionid').primary();
    table.string('username');
    table.string('title').notNullable();
=======
    table.increments('id').primary();
    table.integer('users_id').references('id').inTable('users');
>>>>>>> 190bed55a0533cb9791240165470bf8c300cc622
    table.text('question').notNullable();
    table.integer('likes');
    table.dateTime('created_on');
    table.dateTime('updated_on');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gflow_questions');
};
