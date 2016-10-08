exports.up = function (knex, Promise) {
    return knex.schema.createTable('meetups', function (table) {
        table.increments('id');
        table.integer('users_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.string('title');
        table.integer('likes');
        table.text('description');
        table.timestamp('start_date');
        table.string('location');
        table.timestamp('created_on').defaultTo(knex.fn.now());
        table.timestamp('updated_on').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('meetups');
};

