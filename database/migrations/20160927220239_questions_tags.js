exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions_tags', function(table) {
        table.integer('questions_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('questions')
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
    return knex.schema.dropTable('questions_tags');
};
