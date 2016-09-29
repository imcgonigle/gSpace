exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('gflow_comments_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('gflow_comments_favorites').insert({user_id: 1, gflow_comments_id: 1}),
                knex('gflow_comments_favorites').insert({user_id: 2, gflow_comments_id: 2}),
                knex('gflow_comments_favorites').insert({user_id: 3, gflow_comments_id: 3}),
                knex('gflow_comments_favorites').insert({user_id: 2, gflow_comments_id: 1}),
                knex('gflow_comments_favorites').insert({user_id: 2, gflow_comments_id: 2}),
                knex('gflow_comments_favorites').insert({user_id: 2, gflow_comments_id: 2}),
                knex('gflow_comments_favorites').insert({user_id: 3, gflow_comments_id: 3}),
                knex('gflow_comments_favorites').insert({user_id: 1, gflow_comments_id: 1}),
                knex('gflow_comments_favorites').insert({user_id: 3, gflow_comments_id: 1})
            ]);
        });
};

