exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects_tags', function(table) {
        table.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
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
    return knex.schema.dropTable('projects_tags');
};
