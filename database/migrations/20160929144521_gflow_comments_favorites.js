exports.up = function(knex, Promise) {
    return knex.schema.createTable('gflow_comments_favorites', function(table) {
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.integer('gflow_comments_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('gflow_comments')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gflow_comments_favorites');
};