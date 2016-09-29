exports.up = function(knex, Promise) {
    return knex.schema.createTable('answers_favorites', function(table) {
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.integer('answers_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('answers')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('answers_favorites');
};