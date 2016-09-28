exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('gflow_comments').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('gflow_comments').insert({
                    id: 1,
                    question_post_id: '1',
                    comment: 'ones and zeros',
                    username: 'mxd',
                    likes: 14,
                    user_id: 1
                }),
                knex('gflow_comments').insert({
                    id: 2,
                    question_post_id: '1',
                    comment: 'javascript is an interpreted language',
                    username: 'mxd',
                    likes: 2,
                    user_id: 3
                }),
                knex('gflow_comments').insert({
                    id: 3,
                    question_post_id: '1',
                    comment: 'javascript is so hawt rt now',
                    username: 'mxd',
                    likes: 3,
                    user_id: 5
                }),
                knex('gflow_comments').insert({
                    id: 4,
                    question_post_id: '1',
                    comment: 'google is 18 years old',
                    username: 'mxd',
                    likes: 16,
                    user_id: 1
                }),
                knex('gflow_comments').insert({
                    id: 5,
                    question_post_id: '1',
                    comment: 'let me fork your repository',
                    username: 'mxd',
                    likes: 100000,
                    user_id: 8
                }),
                knex('gflow_comments').insert({
                    id: 6,
                    question_post_id: '1',
                    comment: 'ohai',
                    username: 'mxd',
                    likes: 12,
                    user_id: 1
                })
            ]);
        });
};
