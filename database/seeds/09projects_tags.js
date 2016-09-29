exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects_tags').insert({projects_id: 1, tag_id: 1}),
        knex('projects_tags').insert({projects_id: 2, tag_id: 4}),
        knex('projects_tags').insert({projects_id: 3, tag_id: 3}),
        knex('projects_tags').insert({projects_id: 2, tag_id: 5}),
        knex('projects_tags').insert({projects_id: 2, tag_id: 6}),
        knex('projects_tags').insert({projects_id: 2, tag_id: 9}),
        knex('projects_tags').insert({projects_id: 3, tag_id: 13}),
        knex('projects_tags').insert({projects_id: 1, tag_id: 15}),
        knex('projects_tags').insert({projects_id: 3, tag_id: 10})

      ]);
    });
};
