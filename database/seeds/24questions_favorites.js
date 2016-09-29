exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('questions_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('questions_favorites').insert({user_id: 1, questions_id: 1}),
                knex('questions_favorites').insert({user_id: 2, questions_id: 2}),
                knex('questions_favorites').insert({user_id: 3, questions_id: 3}),
                knex('questions_favorites').insert({user_id: 2, questions_id: 1}),
                knex('questions_favorites').insert({user_id: 2, questions_id: 2}),
                knex('questions_favorites').insert({user_id: 2, questions_id: 2}),
                knex('questions_favorites').insert({user_id: 3, questions_id: 3}),
                knex('questions_favorites').insert({user_id: 1, questions_id: 1}),
                knex('questions_favorites').insert({user_id: 3, questions_id: 1})
            ]);
        });
};

