exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags_users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags_users').insert({tags_id: 1, users_id: 1}),
        knex('tags_users').insert({tags_id: 2, users_id: 2}),
        knex('tags_users').insert({tags_id: 3, users_id: 2}),
        knex('tags_users').insert({tags_id: 4, users_id: 3}),
        knex('tags_users').insert({tags_id: 7, users_id: 3}),
        knex('tags_users').insert({tags_id: 9, users_id: 2}),
        knex('tags_users').insert({tags_id: 11, users_id: 2}),
        knex('tags_users').insert({tags_id: 14, users_id: 1}),
        knex('tags_users').insert({tags_id: 14, users_id: 1}),
      ]);
    });
};
