exports.up = function(knex, Promise) {
    return knex.schema.createTable('favorites', function(table) {
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resource')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('favorites');
};