exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('comments_favorites').insert({user_id: 1, comments_id: 1}),
                knex('comments_favorites').insert({user_id: 2, comments_id: 2}),
                knex('comments_favorites').insert({user_id: 3, comments_id: 3}),
                knex('comments_favorites').insert({user_id: 2, comments_id: 1}),
                knex('comments_favorites').insert({user_id: 2, comments_id: 2}),
                knex('comments_favorites').insert({user_id: 2, comments_id: 2}),
                knex('comments_favorites').insert({user_id: 3, comments_id: 3}),
                knex('comments_favorites').insert({user_id: 1, comments_id: 1}),
                knex('comments_favorites').insert({user_id: 3, comments_id: 1})
            ]);
        });
};

