exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('questions_tags').insert({questions_id: 1, tag_id: 1}),
        knex('questions_tags').insert({questions_id: 2, tag_id: 4}),
        knex('questions_tags').insert({questions_id: 3, tag_id: 3}),
        knex('questions_tags').insert({questions_id: 2, tag_id: 5}),
        knex('questions_tags').insert({questions_id: 2, tag_id: 6}),
        knex('questions_tags').insert({questions_id: 2, tag_id: 9}),
        knex('questions_tags').insert({questions_id: 3, tag_id: 13}),
        knex('questions_tags').insert({questions_id: 1, tag_id: 15}),
        knex('questions_tags').insert({questions_id: 3, tag_id: 10})
      ]);
    });
};
