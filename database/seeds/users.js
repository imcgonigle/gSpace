
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
	return knex('users').del()
    .then(function () {
      return Promise.all([
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
