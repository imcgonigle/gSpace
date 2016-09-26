
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
	return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, username: 'rowValue2'}),
        knex('users').insert({id: 2, username: 'rowValue2'}),
        knex('users').insert({id: 3, username: 'rowValue2'}),
        knex('users').insert({id: 4, username: 'rowValue2'}),
        knex('users').insert({id: 5, username: 'rowValue2'}),
        knex('users').insert({id: 6, username: 'rowValue2'}),
        knex('users').insert({id: 7, username: 'rowValue2'}),
        knex('users').insert({id: 8, username: 'rowValue2'}),
        knex('users').insert({id: 9, username: 'rowValue2'}),
      ]);
    });
};
