exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetups_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('meetups_tags').insert({meetup_id: 1, tag_id: 1}),
        knex('meetups_tags').insert({meetup_id: 2, tag_id: 2}),
        knex('meetups_tags').insert({meetup_id: 3, tag_id: 3}),
        knex('meetups_tags').insert({meetup_id: 2, tag_id: 5}),
        knex('meetups_tags').insert({meetup_id: 2, tag_id: 6}),
        knex('meetups_tags').insert({meetup_id: 2, tag_id: 9}),
        knex('meetups_tags').insert({meetup_id: 3, tag_id: 13}),
        knex('meetups_tags').insert({meetup_id: 3, tag_id: 15}),
        knex('meetups_tags').insert({meetup_id: 3, tag_id: 10})
      ]);
    });
};
