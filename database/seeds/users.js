
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, colName: 'rowValue1'}),
        knex('users').insert({id: 2, colName: 'rowValue2'}),
        knex('users').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
