exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('answers_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('answers_favorites').insert({user_id: 1, answers_id: 1}),
                knex('answers_favorites').insert({user_id: 2, answers_id: 2}),
                knex('answers_favorites').insert({user_id: 3, answers_id: 3}),
                knex('answers_favorites').insert({user_id: 2, answers_id: 1}),
                knex('answers_favorites').insert({user_id: 2, answers_id: 2}),
                knex('answers_favorites').insert({user_id: 2, answers_id: 2}),
                knex('answers_favorites').insert({user_id: 3, answers_id: 3}),
                knex('answers_favorites').insert({user_id: 1, answers_id: 1}),
                knex('answers_favorites').insert({user_id: 3, answers_id: 1})
            ]);
        });
};

