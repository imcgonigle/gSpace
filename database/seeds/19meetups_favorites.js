exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('meetups_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('meetups_favorites').insert({user_id: 1, meetup_id: 1}),
                knex('meetups_favorites').insert({user_id: 2, meetup_id: 2}),
                knex('meetups_favorites').insert({user_id: 3, meetup_id: 3}),
                knex('meetups_favorites').insert({user_id: 2, meetup_id: 1}),
                knex('meetups_favorites').insert({user_id: 2, meetup_id: 2}),
                knex('meetups_favorites').insert({user_id: 2, meetup_id: 2}),
                knex('meetups_favorites').insert({user_id: 3, meetup_id: 3}),
                knex('meetups_favorites').insert({user_id: 1, meetup_id: 1}),
                knex('meetups_favorites').insert({user_id: 3, meetup_id: 1})
            ]);
        });
};

