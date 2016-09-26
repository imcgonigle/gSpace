
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, colName: 'rowValue1'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 3, colName: 'rowValue3'})
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
      ]);
    });
};

table.string('username');
table.text('biography');
table.string('first_name');
table.string('last_name');
table.integer('cohort');
table.string('city');
table.string('linkdn_url');
table.string('github_url');
table.string('website');
table.string('email');
table.dateTime('first_login');
table.dateTime('last_login');
