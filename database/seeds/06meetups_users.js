exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetups_users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('meetups_users').insert({meetup_id: 1, users_id: 1}),
        knex('meetups_users').insert({meetup_id: 2, users_id: 2}),
        knex('meetups_users').insert({meetup_id: 3, users_id: 3}),
      ]);
    });
};
