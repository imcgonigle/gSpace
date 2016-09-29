exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('gflow_questions_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('gflow_questions_favorites').insert({user_id: 1, gflow_questions_id: 1}),
                knex('gflow_questions_favorites').insert({user_id: 2, gflow_questions_id: 2}),
                knex('gflow_questions_favorites').insert({user_id: 3, gflow_questions_id: 3}),
                knex('gflow_questions_favorites').insert({user_id: 2, gflow_questions_id: 1}),
                knex('gflow_questions_favorites').insert({user_id: 2, gflow_questions_id: 2}),
                knex('gflow_questions_favorites').insert({user_id: 2, gflow_questions_id: 2}),
                knex('gflow_questions_favorites').insert({user_id: 3, gflow_questions_id: 3}),
                knex('gflow_questions_favorites').insert({user_id: 1, gflow_questions_id: 1}),
                knex('gflow_questions_favorites').insert({user_id: 3, gflow_questions_id: 1})
            ]);
        });
};

