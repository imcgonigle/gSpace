exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions_favorites', function(table) {
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.integer('questions_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('questions_favorites');
};