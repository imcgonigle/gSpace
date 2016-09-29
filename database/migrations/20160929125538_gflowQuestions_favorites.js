exports.up = function(knex, Promise) {
    return knex.schema.createTable('gflow_questions_favorites', function(table) {
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.integer('gflow_questions_id')
            .unsigned()
            .notNullable()
            .references('questionid')
            .inTable('gflow_questions')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gflow_questions_favorites');
};