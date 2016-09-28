exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('gflow_comments').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('gflow_comments').insert({
                    id: 1,
                    users_id: '1',
                    question_id: '1',
                    comment: 'ones and zeros',
                    likes: 14,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('gflow_comments').insert({
                    id: 2,
                    users_id: '2',
                    question_id: '2',
                    comment: 'javascript is an interpreted language',
                    likes: 2,
                    created_on: '2006-04-10T13:42:23.83-05:00',
                    updated_on: '2006-04-10T13:43:23.83-05:00'
                }),
                knex('gflow_comments').insert({
                    id: 3,
                    users_id: '3',
                    question_id: '3',
                    comment: 'javascript is so hawt rt now',
                    likes: 3,
                    created_on: '2006-04-10T13:43:23.83-05:00',
                    updated_on: '2006-04-10T13:44:23.83-05:00'
                }),
                knex('gflow_comments').insert({
                    id: 4,
                    users_id: '1',
                    question_id: '3',
                    comment: 'google is 18 years old',
                    likes: 16,
                    created_on: '2006-04-10T13:45:23.83-05:00',
                    updated_on: '2006-04-10T13:46:23.83-05:00'
                }),
                knex('gflow_comments').insert({
                    id: 5,
                    users_id: '2',
                    question_id: '1',
                    comment: 'let me fork your repository',
                    likes: 100000,
                    created_on: '2006-04-10T13:49:23.83-05:00',
                    updated_on: '2006-04-10T13:50:23.83-05:00'
                }),
                knex('gflow_comments').insert({
                    id: 6,
                    users_id: '1',
                    question_id: '2',
                    comment: 'ohai',
                    likes: 12,
                    created_on: '2006-04-10T13:55:23.83-05:00',
                    updated_on: '2006-04-10T13:56:23.83-05:00'
                })
            ]);
        });
};
