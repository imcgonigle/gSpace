exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources_tags', function(table) {
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resource')
            .onDelete('CASCADE')
        table.integer('tag_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tags')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('resources_tags');
};
