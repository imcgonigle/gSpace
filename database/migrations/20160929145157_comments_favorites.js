exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments_favorites', function(table) {
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.integer('comments_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('comments')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments_favorites');
};