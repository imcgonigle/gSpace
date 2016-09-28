exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources_tags').insert({resource_id: 1, tag_id: 1}),
        knex('resources_tags').insert({resource_id: 2, tag_id: 2}),
        knex('resources_tags').insert({resource_id: 3, tag_id: 3}),
        knex('resources_tags').insert({resource_id: 2, tag_id: 5}),
        knex('resources_tags').insert({resource_id: 2, tag_id: 6}),
        knex('resources_tags').insert({resource_id: 2, tag_id: 9}),
        knex('resources_tags').insert({resource_id: 3, tag_id: 13}),
        knex('resources_tags').insert({resource_id: 3, tag_id: 15}),
        knex('resources_tags').insert({resource_id: 3, tag_id: 10})
      ]);
    });
};
